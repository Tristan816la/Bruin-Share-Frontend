import React, { useState } from "react";
import "./SearchBar.css";
import { Typography } from "@material-ui/core";

function SearchBar() {
  const [option, setOption] = useState("Search Content...");

  const handleOption = (e) => {
    if (e.target.outerText === "Topic") setOption("Search Topic...");
    else setOption("Search Content...");
  };

  return (
    <div>
      <div className="search">
        <div className="drop_down">
          <button id="drop_down_button">▼</button>
          <div className="dropdown_content">
            <Typography onClick={handleOption}>Topic</Typography>
            <Typography onClick={handleOption}>Content</Typography>
          </div>
        </div>

        <div className="search_bar">
          <input type="text" placeholder={option} />
        </div>
      </div>
      <div className="box">
        <img
          type="submit"
          src="search_icon.png"
          id="search"
          onClick="searchTopic()"
          alt="search"
        />
      </div>
    </div>
  );
}

export default SearchBar;
