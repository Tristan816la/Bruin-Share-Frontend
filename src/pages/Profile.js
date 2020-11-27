import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import ProfileSideBar from "../components/ProfileSideBar/ProfileSideBar";
import MainStoryBox from "../components/MainStoryBox";
import { isLoggedIn } from "../utils/LoginActions";
import { useStyles } from "../utils/useStyles";
import { useParams } from 'react-router-dom';

const Profile = () => {
 
  const {postById} = useParams();
  // console.log(typeof(postById));

  const classes = useStyles();
  const [posts, setPosts] = useState({});
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());


  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(`/userposts/${postById}`).then((res) => res.data);
        // console.log(res);
        setPosts(res);
        console.log(posts);
      } catch(err) {
        console.error(err);
      }
    }  
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
