import React from "react";
import './category-box.css';
import icono__eezy from '../../assets/icons/icono-eezy.svg';
import wave from '../../assets/imgs/wave.svg';


function CategoryBox() {
    return (
        <div className="box__category">

            <div className="icono">
                <div className="vert-container">
                    <img src={wave}/>
                </div>
            </div>

            <div className="box__items">
                <div className="box__items-title">
                    <h1>Elige tu camino...</h1>
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