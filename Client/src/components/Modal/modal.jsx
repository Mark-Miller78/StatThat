import React from "react";
import './modal.css';

const Modal = ({currentTeam, onClose}) => {
    
    return(
    <div className="modalBackdrop">
        <div className="modalContainer">
            <h3 className="modalTitle"> Hello {currentTeam.school}</h3>
            <img alt={currentTeam.school} />
            <p>
             Hello {currentTeam.mascot}
            </p>
            <button onClick ={onClose} type="button">
            Close this modal
            </button>
        </div>
    </div>
    );
};

export default Modal;