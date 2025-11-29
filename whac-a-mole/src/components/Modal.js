import React from "react";
import { createPortal } from "react-dom";
import "../App.css";

const Modal = ({ children }) => {
    return createPortal(
        <div className="modal">
            <div className="modal-content">{children}</div>
        </div>,
        document.body
    );
};
export default Modal;