import React from "react";

const ScoreBoard = ({ score, timeLeft }) => {
    return (
        <div className="score-board">
            <span>Score: {score}</span>
            <span>Time: {timeLeft}s</span>
        </div>
    );
};
export default ScoreBoard;