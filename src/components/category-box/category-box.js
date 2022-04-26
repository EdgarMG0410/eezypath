import React from "react";
import './category-box.css';
import wavenar from '../../assets/imgs/wave-nara.svg';
import waveblue from '../../assets/imgs/wave-blue.svg';
function CategoryBox() {
    return (
        <div className="cat__container">

            <div className="cat__title">
                <h1>Elige tu camino</h1>
                    <img className="wave w1" src={waveblue} alt="blue"/>
                    <img className="wave w2" src={wavenar} alt="naranja"/>
            </div>

            <div className="cat__items">
                <button className="item">Presentaciones</button>
                <button className="item">Cursos</button>
                <button className="item">Invitaciones</button>
                <button className="item">Anuncios</button>
            </div>

        </div>
    );
}

export {CategoryBox};