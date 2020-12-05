import React from "react";

// MUI
import Avatar from "@material-ui/core/Avatar";

// Utils
import { Link, useLocation } from "react-router-dom";

// Components
import Notification from "../Notification";
import SendPost from "../SendPost/SendPost";

// Styles
import "./Navbar.css";
import Logo from "./logo.png";

function Navbar({ loggedIn }) {
  const location = useLocation();

  const signoutaction = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return !loggedIn ? (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={Logo} alt="nav" />
        <Link to="/home">
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
        <img src={Logo} alt="nav" />
        <Link to="/home">
          <div className="bruinShare">BruinShare</div>
        </Link>
      </div>

      <div className="loggedin__right">
        {location.pathname === "/home" && <SendPost></SendPost>}
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
