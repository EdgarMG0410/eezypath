import React from "react";
import "./headbar.css";
import "../sidebar/sidebar";
import menu from '../../assets/icons/negro/menu.png';
import logo from '../../assets/logo.png';
import AccountMenu from "../UserProfile/userProfile";
import searcheezy from "../../assets/icons/negro/search.png";
import notifyeezy from "../../assets/icons/negro/notify.png";
import lightmode from "../../assets/icons/negro/lightmode.png"



function HeadBar() {
    return (
        <div className="headbar__container">
            <div className="headbar__element">
                <img src={menu} alt="menu"/>
            </div>
            <div className="headbar__element-logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="header__search">
                <img src={searcheezy} />
            </div>
            <div className="header__light">
                <img src={lightmode} />
            </div>
            <div className="header__notify">
                <img src={notifyeezy} />
            </div>

            <div className="header__user">
                <AccountMenu/>
            </div>
        </div>
    );
}

export {HeadBar};