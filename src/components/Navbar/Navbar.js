import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Navbar() {
  const loggedIn = false; 
  if (!loggedIn) {
    return (
      <nav className="navbar">
        <div className="navbar__left">
          <img
            src="logo.png"
            alt=""
          />
          <Link to="/">
            <div className="bruinShare">BruinShare</div>
          </Link>
        </div>
        <div className="navbar__right">
          <Link to="/Signup">
            <div className="navbar__option">Sign Up</div>
          </Link>
          <Link to="/Login">
            <div className="navbar__option" id="navbar__option2">Log In</div>
          </Link>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar">
        <div className="navbar__left">
        <img
            src="logo.png"
            alt=""
          />
          <Link to="/">
            <div className="bruinShare">BruinShare</div>
          </Link>
        </div>

        <div className="loggedin__right">
          <NotificationsIcon className='notification'/>
          <Link to="/Home">
            <div className="navbar__option">Sign Out</div>
          </Link>
          <Link to="/Private">
            <Avatar className="avatar"/>
          </Link>
        </div>
      </nav>

    )
  }
  
}

export default Navbar;
