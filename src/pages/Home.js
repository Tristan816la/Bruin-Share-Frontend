import React, {useEffect} from "react";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import MainStoryBox from "../components/MainStoryBox";
import { makeStyles, Box } from "@material-ui/core";
import SideBar from "../components/SideBar/SideBar";



const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  body: {
    display: "flex",
    flexDirection: "row",
  },
  sideBar: {
  },

  posts: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    padding: theme.spacing(1, 2, 2),
    gridColumnGap: "1em",
    gridRowGap: "1em",
    overflow: "scroll",
    height: "830px",
  },
}));

const Home = () => {
  const signoutaction = () => {
    window.localStorage.removeItem("AuthToken");
  };

  
  
  const [posts, setPosts] = React.useState({

  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/publicposts")
    .then(res => res.data);
      setPosts(result);
    }
    fetchData();
  }, []);
  
  console.log(posts);
  

  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Navbar></Navbar>

      {/* <h1>Home</h1> */}
      {/* <button onClick={signoutaction}>Sign out</button> */}
      <div className={classes.body}>
        <Box><SideBar className={classes.sideBar} /></Box>
        
        {posts.length && <Box className={classes.posts}>
            {posts.map((post, i) => <MainStoryBox 
            key={i}
            name={post.postBy.name}
            title={post.topic}
            content={post.content}
            time={post.updatedAt}
            />)}
            
      </Box> }

      </div>
    </div>
  );
};

export default Home;
