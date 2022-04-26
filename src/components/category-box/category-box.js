import React from "react";
import "./category-box.css";


function CategoryBox() {
    return (
        <div className="cat__container">
            <div className="cat__title">
                    <div className="cover">
                        <div className="wave__container">
                            <div className="wave w1"></div>
                            <div className="w2"></div>
                        </div>
                </div>
                <div className="title">
                </div>
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