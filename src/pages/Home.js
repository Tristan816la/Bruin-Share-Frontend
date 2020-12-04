import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import MainStoryBox from "../components/MainStoryBox";
import SideBar from "../components/SideBar/SideBar";
import { useStyles } from "../utils/useStyles";
import { isLoggedIn } from "../utils/LoginActions";

const Home = () => {
  const [posts, setPosts] = useState({});
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const [keyword, setKeyword] = useState("");
  const [option, setOption] = useState("content");

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get("/publicposts").then((res) => res.data);
      setPosts(result);
    };
    fetchPosts();
  }, []);

  const handleSubmit = async () => {
    if (keyword.length === 0) {
      try {
        const res = await axios.get("/publicposts");
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    } else {
      const body = {
        keyword,
        option,
      };
      try {
        const res = await axios.post("/search", body);
        setPosts(res.data.posts);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleContentChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleOptionContentClick = (e) => {
    setOption("content");
  };

  const handleOptionTopicClick = (e) => {
    setOption("topic");
  };

  const classes = useStyles();
  return (
    <>
      <div>
        <Navbar loggedIn={loggedIn} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "#fafafa",
          }}
        >
          <div className={classes.homebody}>
            <div className={classes.homeposts}>
              {posts.length ? (
                <>
                  <div>
                    {posts.map((post, i) => (
                      <MainStoryBox
                        key={i}
                        name={post.postBy.name}
                        postById={post.postBy._id}
                        title={post.topic}
                        content={post.content}
                        time={post.createdAt}
                        likes={post.likes}
                        comments={post.comments}
                        id={post._id}
                        image={post.postBy.image}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div>{"No posts so far, or no results found"}</div>
              )}
            </div>
            <SideBar
              className={classes.homesideBar}
              sideBarOnSearch={handleSubmit}
              sideBarKeyword={keyword}
              sideBarOption={option}
              sideBarHandleContentChange={handleContentChange}
              sideBarHandleOptionContentClick={handleOptionContentClick}
              sideBarHandleOptionTopicClick={handleOptionTopicClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
