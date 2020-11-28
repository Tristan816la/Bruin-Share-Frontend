import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import ProfileSideBar from "../components/ProfileSideBar/ProfileSideBar";
import MainStoryBox from "../components/MainStoryBox";
import { isLoggedIn } from "../utils/LoginActions";
import { useStyles } from "../utils/useStyles";
import { useParams } from "react-router-dom";

const Profile = () => {
  // Need to be changed
  const userId = useParams().postById;
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = await axios.get(`/userinfo/${userId}`)
          .then((res) => res.data);
        setPosts(result.posts);
        setUserInfo(result.user);
      } catch (err) {
        console.error(err);
      }
    };
    getPosts();
  }, []);

  console.log(posts);
  console.log(userInfo);
  return (
    <div>
      <Navbar loggedIn={loggedIn} />
      <div className={classes.profilebody}>
        {posts.length  && (
          <ProfileSideBar
            profileAvatar={userInfo.image}
            user={userInfo.name}
            email={userInfo.email}
          ></ProfileSideBar>
        )}
 
        <div className={classes.profileposts}>
          <div>
            {posts.length > 0 && (
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
    </div>
  );
};

export default Profile;
