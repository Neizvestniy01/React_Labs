import React from "react";

const ControlButtons = ({ onEnd }) => {
    return (
        <div className="controls">
            <button className="btn danger" onClick={onEnd}>
                Закінчити гру
            </button>
        </div>
    );
};
export default ControlButtons;