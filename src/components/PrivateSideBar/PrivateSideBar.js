import React from "react";
import "./PrivateSideBar.css";
import Avatar from "@material-ui/core/Avatar";
import PrivateImg from "./private_side_bar.png";
import EditInfo from "../EditInfo/EditInfo";

function PrivateSideBar( {name, email} ) {
  return (
    <div>
      <div className="private_side_bar">
        <Avatar
          className="private_avatar"
          style={{ height: "158px", width: "158px", borderRadius: "20px" }}
          alt="private_img"
          src=""
        />
        <div className="change_avatar">Click image above to upload a new image</div>
  
        <div className="user_info">
          <div className="privatetext">Name: {name}</div>
          <div className="privatetext">Email: {email}</div>
        </div>

        <div>
          <EditInfo name={name} email={email}></EditInfo>
        </div>

       </div>
    </div>
  )
}

export default PrivateSideBar;
