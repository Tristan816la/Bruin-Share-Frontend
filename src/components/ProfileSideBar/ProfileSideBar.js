import React from 'react'
import "./ProfileSideBar.css"
import Avatar from "@material-ui/core/Avatar";

function ProfileSideBar() {
    return (
        <div>
            <div className="profile_side_bar">
                <Avatar className="profile_avatar" style={{ height: '158px', width: '147px', borderRadius: '20px' }} alt="profile_img" src="" />
                <h2 className="other_user_name">User Name</h2>
                <div className="other_user_state">
                    <text>I am wondering why this happened</text>
                </div>
                <div className="other_user_info">
                    <text>Age:</text>
                    <text>Location:</text>
                    <text>XXX:</text>
                </div>
                <img src="profile_side_bar.png" width="380px"></img>

            </div>

        </div>
    )
}

export default ProfileSideBar
