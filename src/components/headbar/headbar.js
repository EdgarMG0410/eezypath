import React, { useState } from "react";
import "./headbar.css";
import "../sidebar/sidebar";
import menu from '../../assets/icons/negro/menu.png';
import logo from '../../assets/logo.png';


function HeadBar() {
    return (
        <div className="headbar__container">
            <div className="headbar__element">
                <img src={menu} alt="menu"/>
            </div>
            <div className="headbar__element-logo">
                <img src={logo} alt="logo"/>
            </div>
        </div>
    );
}

export {HeadBar};