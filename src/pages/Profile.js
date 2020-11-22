import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import ProfileSideBar from "../components/ProfileSideBar/ProfileSideBar";
import MainStoryBox from "../components/MainStoryBox";
import { isLoggedIn } from "../utils/LoginActions";
import { useStyles } from "../utils/useStyles";


const Profile = () => {
  // Need to be changed
  const userId = "5fabc74c55ca9811782b5f3e";
  const classes = useStyles();
  const [posts, setPosts] = useState({});
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  const getPosts = async () => {
    const user = {
      _id: userId,
    };
    try {
      const data = await axios.get("/myposts", user).then((res) => res.data);
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
    <div >
      <Navbar loggedIn={loggedIn} />
      <div className={classes.homebody}>
        <ProfileSideBar className={classes.homesideBar}/>
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
    </div>
  )
};

export default Profile;
