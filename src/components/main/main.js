import React from "react";
import { CreateNew } from "../create-new/createnew";
import "./main.css";


function MainPage() {
    return (
        <div className="main__container">
            <h2>Bienvenido, Usuario</h2>
            <div className="main__title">
                <h2>Crea tu primer proyecto</h2>
                <p>
                    Do id duis ad nostrud nisi qui sit cillum incididunt consectetur.
                </p>
            </div>
            <div className="main__box">
                <CreateNew/>
                <CreateNew/>
                <CreateNew/>
            </div>
        </div>
    );
}

export {MainPage};