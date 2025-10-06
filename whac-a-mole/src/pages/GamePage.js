import React from "react";
import ScoreBoard from "../components/ScoreBoard";
import ControlButtons from "../components/ControlButtons";
import GameBoard from "../components/GameBoard";

const GamePage = ({ score, setScore, onEnd }) => {
    return (
        <div className="page">
            <h2>Гра триває ⏳</h2>
            <ScoreBoard score={score} />
            <GameBoard />
            <ControlButtons onEnd={onEnd} />
        </div>
    );
};
export default GamePage;