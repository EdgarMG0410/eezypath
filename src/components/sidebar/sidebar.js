import React from "react";
import "./sidebar.css";
import logo from "../../assets/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import Home from "@mui/icons-material/Home";


function SideBar() {
    return (
        <div className="sidebar__container">
            <div className="sidebar__logo">
                <div className="logo">
                    <img src={logo}/>
                </div>
            </div>
            <div className="sidebar__menu">
                <h3>Menú</h3>
                <div className="sidebar__menu-buttons">
                    <ol>
                        <li>
                            <Home/>Inicio
                        </li>
                        <li>Mis Proyectos</li>
                        <li>Plantillas</li>
                    </ol>
                </div>
            </div>
            <div className="sidebar__plan">
                <div className="sidebar__plan-container">
                    <h3>Mi Plan</h3>
                    <p>Espacio Disponible</p>
                    <p>2.1GB / 5GB</p>
                    <h3>Ayuda</h3>
                    <h4>Mejora tu plan</h4>
                </div>
            </div>
            <div className="sidebar__logout">
                <h3>Cerrar sesión</h3>
            </div>
        </div>
    );
}

export {SideBar};