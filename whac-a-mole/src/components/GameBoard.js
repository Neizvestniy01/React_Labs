import React from "react";

const GameBoard = ({ moleIndex, onHit }) => {
    return (
        <div className="game-board">
            {Array.from({ length: 9 }).map((_, i) => (
                <div
                    key={i}
                    className={`hole ${moleIndex === i ? "active" : ""}`}
                    onClick={() => onHit(i)}>
                    <div className="mole" />
                </div>
            ))}
        </div>
    );
};
export default GameBoard;