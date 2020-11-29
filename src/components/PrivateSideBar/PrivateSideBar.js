import React from "react";
import "./PrivateSideBar.css";
import Avatar from "@material-ui/core/Avatar";
import PrivateImg from "./private_side_bar.png";

function PrivateSideBar() {
  return (
    <div>
      <div className="private_side_bar">
        <Avatar
          className="private_avatar"
          style={{ height: "158px", width: "158px", borderRadius: "20px" }}
          alt="private_img"
          src=""
        />
  
        <div className="user_info">
          <div className="privatetext">Name</div>
          <div className="privatetext">Email</div>
        </div>

        <div className="user_info">
          <div className="privatetext">Age</div>
          <div className="privatetext">Location</div>
        </div>

       </div>
    </div>
  )
}

export default PrivateSideBar;
