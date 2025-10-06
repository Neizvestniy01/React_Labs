import React from "react";

const ResultPage = ({ score, onRestart }) => {
    return (
        <div className="page">
            <h2>Гру завершено 🎉</h2>
            <p>Твій результат: <b>{score}</b></p>
            <button className="btn" onClick={onRestart}>На головну</button>
        </div>
    );
};
export default ResultPage;