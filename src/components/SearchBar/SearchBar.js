import React, { useState, useEffect } from "react";

// MUI
import { Typography } from "@material-ui/core";

// Styles
import "./SearchBar.css";


function SearchBar({
  searchBarOnSearch,
  option,
  handleContentChange,
  handleOptionContentClick,
  handleOptionTopicClick,
}) {
  const [placeholder, setPlaceholder] = useState(() => {
    let result;
    option === "content"
      ? (result = "Search content...")
      : (result = "Search topic...");
    return result;
  });
  useEffect(() => {
    if (option === "content") setPlaceholder("Search content...");
    else setPlaceholder("Search topic...");
  }, [option]);

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
              placeholder={placeholder}
              onChange={handleContentChange}
            />
          </div>

          <div className="box">
            <img
              type="submit"
              src="search_icon.png"
              id="search"
              onClick={searchBarOnSearch}
              alt="search"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
