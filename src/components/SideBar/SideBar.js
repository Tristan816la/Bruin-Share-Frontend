import React from "react";
import "./SideBar.css";
import SearchBar from "../SearchBar/SearchBar";

function SideBar({
  sideBarOnSearch,
  sideBarKeyword,
  sideBarOption,
  sideBarHandleContentChange,
  sideBarHandleOptionContentClick,
  sideBarHandleOptionTopicClick }) {
  return (
    <div>
      <div className="side_bar">
        <SearchBar
          searchBarOnSearch={sideBarOnSearch}
          keyword={sideBarKeyword}
          option={sideBarOption}
          handleContentChange={sideBarHandleContentChange}
          handleOptionContentClick={sideBarHandleOptionContentClick}
          handleOptionTopicClick={sideBarHandleOptionTopicClick}
        />
        <img src="sideBarImg.png" alt="" />
      </div>
    </div>
  );
}

export default SideBar;
