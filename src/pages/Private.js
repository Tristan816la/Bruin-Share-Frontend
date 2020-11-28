import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import PrivateSideBar from "../components/PrivateSideBar/PrivateSideBar";
import MainStoryBox from "../components/MainStoryBox";
import { getUserId } from "../utils/UserAction";
import { isLoggedIn } from "../utils/LoginActions";
import { useStyles } from "../utils/useStyles";


const Private = () => {
  const userId = getUserId();
  const classes = useStyles();
  const [posts, setPosts] = useState({});
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  const getPosts = async () => {

    try {
      const data = await axios.get("/myposts").then((res) => res.data);
      setPosts(data);
      console.log(posts);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);


  return (
    <div>
      <Navbar loggedIn={loggedIn} />
      <div className={classes.privatebody}>
          <PrivateSideBar
            ></PrivateSideBar>

        
        <div className={classes.privateposts}>
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
    </div>
  )
};

export default Private;
