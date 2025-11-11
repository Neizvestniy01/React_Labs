import React from "react";
import { createPortal } from "react-dom";

const EndGameModal = ({ score, onRestart, onSelectDifficulty }) => {
    return createPortal(
        <div className="modal">
            <div className="result-box">
                <h2>Гру завершено!</h2>
                <p>Ваш рахунок: {score}</p>
                <button className="btn" onClick={onRestart}>Спробувати ще раз</button>
                <button className="btn" onClick={onSelectDifficulty}>Вибір складності</button>
            </div>
        </div>,
        document.body
    );
};
export default EndGameModal;