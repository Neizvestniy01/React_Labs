import React from "react";
import "../App.css";

const ControlButtons = ({ onEnd }) => (
    <div className="controls">
        <button className="btn danger" onClick={onEnd}>Закінчити гру</button>
    </div>
);
export default ControlButtons;