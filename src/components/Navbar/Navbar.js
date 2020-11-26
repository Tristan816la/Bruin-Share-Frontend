import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Notification from '../Notification';

function Navbar({ loggedIn }) {
  const signoutaction = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return !loggedIn ? (
    <nav className="navbar">
      <div className="navbar__left">
        <img src="logo.png" alt="" />
        <Link to="/">
          <div className="bruinShare">BruinShare</div>
        </Link>
      </div>
      <div className="navbar__right">
        <Link to="/Signup">
          <div className="navbar__option">Sign Up</div>
        </Link>
        <Link to="/Login">
          <div className="navbar__option" id="navbar__option2">
            Log In
          </div>
        </Link>
      </div>
    </nav>
  ) : (
    <nav className="navbar">
      <div className="navbar__left">
        <img src="logo.png" alt="" />
        <Link to="/">
          <div className="bruinShare">BruinShare</div>
        </Link>
      </div>

      <div className="loggedin__right">
        <Notification className="notification" />
        <Link to="/Home">
          <div className="navbar__option" onClick={signoutaction}>
            Sign Out
          </div>
        </Link>
        <Link to="/private">
          <Avatar
            className="avatar"
            src={window.localStorage.UserImage}
            alt="avatar"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
