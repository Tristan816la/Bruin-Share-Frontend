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
      <ul className="navbr__right">
        <Link to="/Signup">
          <li className="navbar__option">Sign Up</li>
        </Link>
        <Link to="/Login">
          <li className="navbar__option" id="navbar__option2">Log In</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
