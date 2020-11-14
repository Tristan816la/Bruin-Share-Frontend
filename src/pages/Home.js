import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/SideBar/SideBar"

const Home = () => {
  const signoutaction = () => {
    window.localStorage.removeItem("AuthToken");
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1>Home</h1>
      <button onClick={signoutaction}>Sign out</button>
      <div className="home_body">
        <SideBar />
        {/*<Post />*/}
      </div>
    </div>
  );
};

export default Home;
