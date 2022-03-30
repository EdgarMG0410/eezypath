import React from "react";
import "./createnew.css";
import AddIcon from '@mui/icons-material/Add';

function CreateNew() {
    return (
        <div className="createnew___container">
            <div className="createnew__icon">
                <AddIcon/>
            </div>
            <div className="createnew__text">
                <p>Crea un Proyecto</p>
            </div>
        </div>
    );
}

export {CreateNew}