import React, { useState, useEffect } from "react";

const ResultPage = ({ score, onRestart }) => {
    const [displayScore, setDisplayScore] = useState(0);
    useEffect(() => {
        let current = 0;
        const step = Math.ceil(score / 30);
        const interval = setInterval(() => {
            current += step;
            if (current >= score) {
                setDisplayScore(score);
                clearInterval(interval);
            } else {
                setDisplayScore(current);
            }
        }, 50);
        return () => clearInterval(interval);
    }, [score]);
    return (
        <div className="page result-page">
            <h2>Гру завершено 🎉</h2>
            <p>Твій результат: <b>{displayScore}</b></p>
            <button className="btn" onClick={onRestart}>На головну</button>
        </div>
    );
};
export default ResultPage;