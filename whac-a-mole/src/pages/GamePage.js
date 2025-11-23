import React, { useEffect, useState } from "react";
import { UseLogic } from "../hooks/UseLogic";
import { UseScore } from "../hooks/UseScore";
import ControlButtons from "../components/ControlButtons";
import GameBoard from "../components/GameBoard";
import ScoreBoard from "../components/ScoreBoard";
import EndGameModal from "../components/EndGameModal";
import "../App.css";

const GamePage = ({ onExit }) => {
    const difficulty = localStorage.getItem("difficulty") || "easy";
    const fieldSize = Number(localStorage.getItem("fieldSize") || 3);
    const { moleIndex, timeLeft, isPlaying, startGame, endGame, hitMole, totalHoles, cols } = UseLogic(difficulty, fieldSize);
    const { score, increaseScore, resetScore } = UseScore();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        startGame();
    }, [startGame]);
    useEffect(() => {
        if (!isPlaying && timeLeft === 0) setShowModal(true);
    }, [isPlaying, timeLeft]);

    const handleHitMole = (index) => {
        if (hitMole(index)) increaseScore(10);
    };
    const handleEndGame = () => {
        endGame();
        setShowModal(true);
    };
    const handleRestart = () => {
        resetScore();
        setShowModal(false);
        startGame();
    };
    const handleSelectDifficulty = () => {
        endGame();
        setShowModal(false);
        if (onExit) onExit();
    };
    return (
        <div className="page game-page">
            <ScoreBoard score={score} timeLeft={timeLeft} />
            <GameBoard moleIndex={moleIndex} onHit={handleHitMole} totalHoles={totalHoles} cols={cols} />
            <ControlButtons onEnd={handleEndGame} />
            {showModal && (
                <EndGameModal
                    score={score}
                    onRestart={handleRestart}
                    onSelectDifficulty={handleSelectDifficulty}
                />
            )}
        </div>
    );
};
export default GamePage;