import React from "react";
import Modal from "./Modal";

const EndGameModal = ({ score, onRestart, onSelectDifficulty }) => (
    <Modal>
        <div className="result-box">
            <h2>Гру завершено!</h2>
            <p>Ваш рахунок: {score}</p>
            <div className="modal-actions">
                <button className="btn" onClick={onRestart}>Спробувати ще раз</button>
                <button className="btn" onClick={onSelectDifficulty}>Вибір складності</button>
            </div>
        </div>
    </Modal>
);
export default EndGameModal;