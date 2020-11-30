import React from "react";
import "./SideBar.css";
import SearchBar from "../SearchBar/SearchBar";

function SideBar() {
  return (
    <div>
      <div className="side_bar">
        <SearchBar />
        <img src="sideBarImg.png" alt="" />
      </div>
    </div>
  );
}

export default SideBar;
