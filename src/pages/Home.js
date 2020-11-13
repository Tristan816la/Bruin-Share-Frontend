import React from "react";

const Home = () => {
  const signoutaction = () => {
    window.localStorage.removeItem("AuthToken");
  };
  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <h1>Home</h1>
      <button onClick={signoutaction}>Sign out</button>
    </div>
  );
};

export default Home;
