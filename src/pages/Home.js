import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import SendPost from "../components/SendPost/SendPost";
import axios from "axios";
import MainStoryBox from "../components/MainStoryBox";
import { Box } from "@material-ui/core";
import SideBar from "../components/SideBar/SideBar";
import { useStyles } from "../utils/useStyles";
import { isLoggedIn } from "../utils/LoginActions";
import { Height } from "@material-ui/icons";

const Home = () => {
  const [posts, setPosts] = useState({});
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get("/publicposts").then((res) => res.data);
      setPosts(result);
    };
    fetchPosts();
  }, []);

  const classes = useStyles();

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Navbar loggedIn={loggedIn} />
        <div className={classes.homebody}>
          <SideBar className={classes.homesideBar} />
          <div className={classes.homeposts}>
            {posts.length && (
              <>
                {posts.map((post, i) => (
                  <MainStoryBox
                    key={i}
                    name={post.postBy.name}
                    title={post.topic}
                    content={post.content}
                    time={post.updatedAt}
                    likes={post.likes}
                    comments={post.comments}
                    id={post._id}
                    image={post.postBy.image}
                    postById={post.postBy._id}
                  />
                ))}
              </>
            )}
          </div>
        </div>
        <SendPost />
      </div>
    </>
  );
};

export default Home;
