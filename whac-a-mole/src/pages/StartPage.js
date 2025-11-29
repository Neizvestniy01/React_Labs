import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const StartPage = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [difficulty, setDifficulty] = useState(localStorage.getItem("difficulty") || "easy");
    const [fieldSize, setFieldSize] = useState(localStorage.getItem("fieldSize") || "3");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userId.trim()) {
            alert("Введіть ID користувача");
            return;
        }
        localStorage.setItem("difficulty", difficulty);
        localStorage.setItem("fieldSize", fieldSize);
        navigate(`/game/${userId}`, { state: { difficulty, fieldSize } });
    };
    return (
        <div className="page start-page">
            <h1>Whac-A-Mole</h1>
            <p>Класична аркадна гра! Введіть ID і виберіть налаштування.</p>
            <form onSubmit={handleSubmit} className="difficulty-form">
                <div className="field-row">
                    <label className="field-label">ID користувача</label>
                    <input
                        className="text-input"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        placeholder="user123"/>
                </div>
                <div className="section-title">Складність</div>
                <label className="difficulty-label">
                    <input type="radio" name="difficulty" value="easy" checked={difficulty === "easy"} onChange={() => setDifficulty("easy")} />
                    <span>Легко (1s)</span>
                </label>
                <label className="difficulty-label">
                    <input type="radio" name="difficulty" value="hard" checked={difficulty === "hard"} onChange={() => setDifficulty("hard")} />
                    <span>Важко (0.5s)</span>
                </label>
                <label className="difficulty-label">
                    <input type="radio" name="difficulty" value="impossible" checked={difficulty === "impossible"} onChange={() => setDifficulty("impossible")} />
                    <span>Неможливо (0.3s)</span>
                </label>
                <div className="section-title">Розмір поля</div>
                <label className="difficulty-label">
                    <input type="radio" name="fieldSize" value="3" checked={fieldSize === "3"} onChange={() => setFieldSize("3")} />
                    <span>3 × 3</span>
                </label>
                <label className="difficulty-label">
                    <input type="radio" name="fieldSize" value="5" checked={fieldSize === "5"} onChange={() => setFieldSize("5")} />
                    <span>5 × 5</span>
                </label>
                <div className="form-actions">
                    <button type="submit" className="btn">Почати гру</button>
                </div>
            </form>
        </div>
    );
};
export default StartPage;