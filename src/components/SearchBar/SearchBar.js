import React from "react";
import "./SearchBar.css";

function SearchBar() {

  return (
    <div>
      <div className="search">
        <div className="drop_down">
          <button id="drop_down_button">▼</button>
          <div className="dropdown_content">
            <a href="#">Article</a>
            <a href="#">User</a>
          </div>
        </div>

        <div className="search_bar">
          <input type="text" placeholder="Search stories..." />
        </div>
      </div>
      <div className="box">
        <img type="submit" src="search_icon.png" id="search" onClick="searchTopic()" />
      </div>
    </div >
  );
}

export default SearchBar;
