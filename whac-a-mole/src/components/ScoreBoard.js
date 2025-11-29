import React from "react";
import "../App.css";

const ScoreBoard = ({ score, timeLeft }) => (
    <div className="score-board">
        <span>Рахунок: {score}</span>
        <span>Час: {timeLeft}s</span>
    </div>
);
export default ScoreBoard;