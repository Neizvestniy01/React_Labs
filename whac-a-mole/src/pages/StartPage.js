import React from "react";

const StartPage = ({ onStart }) => {
    return (
        <div className="page">
            <h1>Whac-A-Mole</h1>
            <p>Класична аркадна гра! Спробуй набрати максимум очок 🎯</p>
            <button className="btn" onClick={onStart}>Почати гру</button>
        </div>
    );
};
export default StartPage;