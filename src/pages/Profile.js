import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import ProfileSideBar from "../components/ProfileSideBar/ProfileSideBar";
import MainStoryBox from "../components/MainStoryBox";
import { isLoggedIn } from "../utils/LoginActions";
import { useStyles } from "../utils/useStyles";
<<<<<<< HEAD
import { useParams } from 'react-router-dom';

const Profile = () => {
 
  const {postById} = useParams();
  // console.log(typeof(postById));

=======
import { useParams } from "react-router-dom";

const Profile = () => {
  // Need to be changed
  const userId = useParams().postById;
>>>>>>> main
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

<<<<<<< HEAD
=======
  let profileUser;
  if (posts.length) profileUser = posts[0].postBy;
>>>>>>> main

  useEffect(() => {
    const getPosts = async () => {
      try {
<<<<<<< HEAD
        const res = await axios.get(`/userposts/${postById}`).then((res) => res.data);
        // console.log(res);
        setPosts(res);
        console.log(posts);
      } catch(err) {
        console.error(err);
      }
    }  
=======
        const res = await axios.get(`/userposts/${userId}`);
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
>>>>>>> main
    getPosts();
  }, []);

  console.log(profileUser);
  return (
    <div>
      <Navbar loggedIn={loggedIn} />
      <div className={classes.profilebody}>
        {posts.length && (
          <ProfileSideBar
            profileAvatar={profileUser.image}
            user={profileUser.name}
            email={profileUser.email}
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
