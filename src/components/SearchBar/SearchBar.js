import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import axios from "axios";
import { Typography } from "@material-ui/core";

function SearchBar({
  searchBarOnSearch,
  keyword,
  option,
  handleContentChange,
  handleOptionContentClick,
  handleOptionTopicClick,
}) {
  return (
    <div>
      <div className="search">
        <div className="drop_down">
          <button id="drop_down_button">▼</button>
          <div className="dropdown_content">
            <Typography onClick={handleOptionContentClick}>Content</Typography>
            <Typography href="#" onClick={handleOptionTopicClick}>
              Topic
            </Typography>
          </div>
        </div>

        <form id="search_field">
          <div className="search_bar">
            <input
              type="text"
              placeholder="Search stories..."
              onChange={handleContentChange}
            />
          </div>

          <div className="box">
            <img
              type="submit"
              src="search_icon.png"
              id="search"
              onClick={searchBarOnSearch}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
