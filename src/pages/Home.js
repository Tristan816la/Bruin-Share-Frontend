import React from "react";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  const signoutaction = () => {
    window.localStorage.removeItem("AuthToken");
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1>Home</h1>
      <button onClick={signoutaction}>Sign out</button>
    </div>
  );
};

export default Home;
