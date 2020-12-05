import React from "react";

// Components
import EditInfo from "../EditInfo/EditInfo";
import Updateavatar from "./Updateavatar";

// Styles
import "./PrivateSideBar.css";
import PrivateImg from "./private_side_bar.png";


function PrivateSideBar({ name, email, image, setImage }) {

  return (
    <div>
      <div className="private_side_bar">
        <div>
          <Updateavatar
            avatar={image}
            setImage={setImage}
            currentImage={image}
          ></Updateavatar>
        </div>
        <div className="change_avatar">
          Click image above to upload a new image
        </div>

        <div className="user_info">
          <div className="privatetext">Name: {name}</div>
          <div className="privatetext">Email: {email}</div>
        </div>

        <div>
          <EditInfo currentname={name} currentemail={email}></EditInfo>
        </div>

        <img src={PrivateImg} alt="private" />
      </div>
    </div>
  );
}

export default PrivateSideBar;
