import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import GameBoard from "../components/GameBoard";
import ScoreBoard from "../components/ScoreBoard";
import ControlButtons from "../components/ControlButtons";
import EndGameModal from "../components/EndGameModal";
import { UseLogic } from "../hooks/UseLogic";
import { UseScore } from "../hooks/UseScore";

const GamePage = () => {
    const { userId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const difficulty = (location.state && location.state.difficulty) || localStorage.getItem("difficulty") || "easy";
    const fieldSize = Number((location.state && location.state.fieldSize) || localStorage.getItem("fieldSize") || 3);
    const { moleIndex, timeLeft, isPlaying, startGame, endGame, hitMole, totalHoles, cols } = UseLogic(difficulty, fieldSize);
    const { score, increaseScore, resetScore } = UseScore();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        startGame();
    }, [startGame]);
    useEffect(() => {
        if (!isPlaying && timeLeft === 0) setShowModal(true);
    }, [isPlaying, timeLeft]);
    const handleHit = (index) => {
        if (hitMole(index)) increaseScore(10);
    };
    const handleEnd = () => {
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
        navigate("/", { replace: false });
    };
    return (
        <div className="page game-page">
            <h2>Гра — користувач: {userId}</h2>
            <ScoreBoard score={score} timeLeft={timeLeft} />
            <GameBoard moleIndex={moleIndex} onHit={handleHit} totalHoles={totalHoles} cols={cols} />
            <ControlButtons onEnd={handleEnd} />
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