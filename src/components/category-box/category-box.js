import React from "react";
import './category-box.css';
import icono__eezy from '../../assets/icons/icono-eezy.svg';
import migue from '../../assets/icons/MIGUE.png';

function CategoryBox() {
    return (
        <div className="cat__container">

            <div className="icono">
                <div className="container">
                    
                </div>
            </div>

  
            <div className="cat__items">
                <div className="cat__title">
                    <h1>Construyamos un camino</h1>
                </div>
                <div className="items">
                    <button className="item">Presentaciones</button>
                    <button className="item">Cursos</button>
                    <button className="item">Invitaciones</button>
                    <button className="item">Anuncios</button>
                </div>
            </div>

            <div className="icono">
                <div className="container">
                    <img src={icono__eezy}/>
                </div>
            </div>
        </div>
    );
}

export {CategoryBox};