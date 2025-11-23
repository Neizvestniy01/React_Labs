import React from "react";

const GameBoard = ({ moleIndex, onHit, totalHoles = 9, cols = 3 }) => {
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: "12px",
        width: `${cols * 120}px`,
        maxWidth: "100%",
        margin: "0 auto",
    };
    return (
        <div className="game-board" style={gridStyle}>
            {Array.from({ length: totalHoles }).map((_, i) => (
                <div
                    key={i}
                    className={`hole ${moleIndex === i ? "active" : ""}`}
                    onClick={() => onHit(i)}
                    style={{ aspectRatio: "1 / 1" }}>
                    <div className="mole" />
                </div>
            ))}
        </div>
    );
};
export default GameBoard;