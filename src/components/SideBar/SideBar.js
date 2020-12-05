import React from "react";

// Components
import SearchBar from "../SearchBar/SearchBar";

// Styles
import "./SideBar.css";

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
