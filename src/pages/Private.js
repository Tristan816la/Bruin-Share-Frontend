import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import PrivateSideBar from "../components/PrivateSideBar/PrivateSideBar";
import MainStoryBox from "../components/MainStoryBox";
import { getUserId } from "../utils/UserAction";
import { isLoggedIn } from "../utils/LoginActions";
import { useStyles } from "../utils/useStyles";

const Private = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const [userInfo, setUserInfo] = useState({});
  const [image, setImage] = useState();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await axios.get("/myinfo").then((res) => res.data);
        setPosts(data.posts);
        setUserInfo(data.user);
        setImage(data.user.image);
      } catch (err) {
        console.error(err);
      }
    };
    getPosts();
  }, []);
  return (
    <div>
      <Navbar loggedIn={loggedIn} />
      <div className={classes.privatebody}>
        {posts.length && (
          <PrivateSideBar
            name={userInfo.name}
            email={userInfo.email}
            image={userInfo.image}
            setImage={setImage}
          ></PrivateSideBar>
        )}

        <div className={classes.privateposts}>
          {posts.length ? (
            <>
              {posts.map((post, i) => (
                <MainStoryBox
                  key={i}
                  name={userInfo.name}
                  title={post.topic}
                  content={post.content}
                  time={post.updatedAt}
                  likes={post.likes}
                  comments={post.comments}
                  id={post._id}
                  image={image}
                  postById={userInfo._id}
                />
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Private;
