import React from "react";
import "./sidebar-collapse.css";
import home from '../../assets/icons/negro/home.png';
import templates from '../../assets/icons/negro/plantillas.png';
import paths from '../../assets/icons/negro/carpeta.png';

function SideBarCollapse() {
    return (
        <div className="sidebar-collapse__container">
            <div className="sidebar-collapse__icon-container">
                <div className="icon">
                    <img src={home} alt="logo"/>
                </div>
                <div className="icon">
                    <img src={templates} alt="logo"/>
                </div>
                <div className="icon">
                    <img src={paths} alt="logo"/>
                </div>
            </div>
        </div>
    );
}

export {SideBarCollapse };