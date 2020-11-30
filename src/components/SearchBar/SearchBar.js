import React from "react";
import "./SearchBar.css";
import axios from "axios";
import { useState, useEffect } from "react";

function SearchBar({ searchBarOnSearch, keyword, option, handleContentChange, handleOptionContentClick, handleOptionTopicClick }) {


  return (
    <div>
      <div className="search">
        <div className="drop_down">
          <button id="drop_down_button">▼</button>
          <div className="dropdown_content">
            <a href="#" onClick={handleOptionContentClick}>Content</a>
            <a href="#" onClick={handleOptionTopicClick}>Topic</a>
          </div>
        </div>

        <form id="search_field">
          <div className="search_bar">
            <input type="text" placeholder="Search stories..." onChange={handleContentChange} />
          </div>

          <div className="box">
            <img type="submit" src="search_icon.png" id="search" onClick={searchBarOnSearch} />
          </div>
        </form>

      </div>
    </div >
  );
}

export default SearchBar;
