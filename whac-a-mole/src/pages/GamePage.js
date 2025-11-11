import React, { useEffect, useState } from "react";
import { UseLogic } from "../hooks/UseLogic";
import { UseScore } from "../hooks/UseScore";
import ControlButtons from "../components/ControlButtons";
import GameBoard from "../components/GameBoard";
import ScoreBoard from "../components/ScoreBoard";
import EndGameModal from "../components/EndGameModal";
import "../App.css";

const GamePage = () => {
    const difficulty = localStorage.getItem("difficulty") || "easy";
    const { moleIndex, timeLeft, isPlaying, startGame, endGame, hitMole } = UseLogic(difficulty);
    const { score, increaseScore, resetScore } = UseScore();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        startGame();
    }, [startGame]);
    useEffect(() => {
        if (!isPlaying && timeLeft === 0) {
            setShowModal(true);
        }
    }, [isPlaying, timeLeft]);
    const handleHitMole = (index) => {
        if (hitMole(index)) {
            increaseScore(10);
        }
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
        window.location.reload();
    };
    return (
        <div className="page game-page">
            <ScoreBoard score={score} timeLeft={timeLeft} />
            <GameBoard moleIndex={moleIndex} onHit={handleHitMole} />
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