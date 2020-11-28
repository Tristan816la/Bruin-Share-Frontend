import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import MainStoryBox from "../components/MainStoryBox";
import SideBar from "../components/SideBar/SideBar";
import "../App.css";
import { isLoggedIn } from "../utils/LoginActions";

export default function NotFound() {
    const [loggedIn, setLoggedIn] = useState(isLoggedIn());
    return (
        <div>
            <Navbar loggedIn={loggedIn} />
            <br></br>
            <div className="wrapper404">
                <div className ="">
                <div className=" ">
                    <div >
                        <img className="image404" src="/page404.jpg"/>
                    </div>
                    <div className="info404">
                        <span className="title404">Page Not Found!</span>
                        <div className="content404">
                            <p >Sorry, but we can't find the page you </p><p>are looking for...</p>
                        </div>
                        <div className="link404wrapper">
                        <a className="link404" href="/home">Back To HomePage</a>
                        <a className="link404" href="/">Back To Landing Page</a>
                        </div>
                    </div>
                    
                   
                </div>
                </div>
                
            </div>
        </div>
    )
}
