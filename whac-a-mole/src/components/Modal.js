import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
    return createPortal(
        <div className="modal">
            {children}
        </div>,
        document.body
    );
};
export default Modal;