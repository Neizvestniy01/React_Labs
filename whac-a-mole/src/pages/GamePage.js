import React, { useEffect } from "react";
import GameBoard from "../components/GameBoard";
import ScoreBoard from "../components/ScoreBoard";
import ControlButtons from "../components/ControlButtons";
import { UseLogic } from "../hooks/UseLogic";

const GamePage = ({ score, setScore, onEnd }) => {
    const { timeLeft, moleIndex, isPlaying, hitMole, startGame, endGame } = UseLogic(score, setScore);
    useEffect(() => {
        startGame();
    }, [startGame]);
    useEffect(() => {
        if (!isPlaying && timeLeft === 0) {
            onEnd();
        }
    }, [isPlaying, timeLeft, onEnd]);
    const handleEnd = () => {
        endGame();
        onEnd();
    };
    return (
        <div className="page game-page">
            <ScoreBoard score={score} timeLeft={timeLeft} />
            <GameBoard moleIndex={moleIndex} onHit={hitMole} />
            <ControlButtons onEnd={handleEnd} />
        </div>
    );
};
export default GamePage;