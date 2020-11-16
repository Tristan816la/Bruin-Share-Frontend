import React from "react";
import Navbar from "../components/Navbar/Navbar";

import MainStoryBox from "../components/MainStoryBox";
import { makeStyle, makeStyles} from "@material-ui/core";
import SideBar from "../components/SideBar/SideBar"

const useStyle = makeStyles((theme) => ({
  temp: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(1),
    "& > *": {
      margin: theme.spacing(1),
    },
  }
}));




const Home = () => {
  const signoutaction = () => {
    window.localStorage.removeItem("AuthToken");
  };
  const name = "Tom";
  const title = "this is a title";
  const message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod \
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod \
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim";
  const time = "15 Oct, 2020";
  const classes = useStyle();
  return (
    <div>
      <Navbar></Navbar>


      {/* <h1>Home</h1> */}
      {/* <button onClick={signoutaction}>Sign out</button> */}
      <div className="home_body">
        <SideBar />
        {/*<Post />*/}

      </div>
      <div className={classes.temp}>
      <MainStoryBox name={name} title={title} 
      content={message}
      time={time}>
      </MainStoryBox>
      <MainStoryBox name={name} title={title} 
      content={message}
      time={time}>
      </MainStoryBox>
      </div>
    </div>
  );
};

export default Home;
