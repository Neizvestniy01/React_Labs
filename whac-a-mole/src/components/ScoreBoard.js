import React from "react";

const ScoreBoard = ({ score, timeLeft }) => {
    return (
        <div className="score-board">
            <span>Рахунок: {score}</span>
            <span>Час: {timeLeft}s</span>
        </div>
    );
};
export default ScoreBoard;