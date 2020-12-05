import React from "react";

// MUI
import Avatar from "@material-ui/core/Avatar";

// Styles
import "./ProfileSideBar.css";
import ProfileImg from "./profile.png";

function ProfileSideBar({ profileAvatar, user, email }) {
  return (
    <div>
      <div className="profile_side_bar">
        <Avatar
          className="profile_avatar"
          style={{ width: "15vw", height: "15vw", borderRadius: "20px" }}
          alt="profile_img"
          src={profileAvatar}
        />

        <div className="other_user_info">
          <div className="profiletext">User: {user}</div>
          <div className="profiletext">Email: {email}</div>
        </div>
        <img src={ProfileImg} alt="profile" />
      </div>
    </div>
  );
}

export default ProfileSideBar;
