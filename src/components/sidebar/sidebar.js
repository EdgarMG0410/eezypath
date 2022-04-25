import React from "react";
import "./sidebar.css";
import home from '../../assets/icons/negro/home.png';
import templates from '../../assets/icons/negro/plantillas.png';
import paths from '../../assets/icons/negro/carpeta.png';

function SideBar() {
    return (
        <div className="sidebar__container">
              <div className="sidebar__icon-container">
                <div className="tile">
                    <img src={home} alt="logo"/>
                    <p>Inicio</p>
                </div>
                <div className="tile">
                    <img src={templates} alt="logo"/>
                    <p>Plantillas</p>
                </div>
                <div className="tile">
                    <img src={paths} alt="logo"/>
                    <p>Mis Paths</p>
                </div>
            </div>
        </div>
    );
}

export {SideBar};