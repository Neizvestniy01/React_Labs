import React from "react";

const GameBoard = () => {
    return (
        <div className="game-board">
            {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="hole">
                    <div className="mole"></div>
                </div>
            ))}
        </div>
    );
};
export default GameBoard;