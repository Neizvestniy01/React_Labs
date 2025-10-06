import React from "react";

const ScoreBoard = ({ score }) => {
    return (
        <div className="score-board">
            <span>Очки: {score}</span>
            <span>Час: 60с</span>
        </div>
    );
};
export default ScoreBoard;