import React, { useState } from "react";
import { useForm } from "react-hook-form";
import GamePage from "./GamePage";
import "../App.css";

export const StartPage = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            difficulty: localStorage.getItem("difficulty") || "easy",
            fieldSize: localStorage.getItem("fieldSize") || "3",
        },
    });
    const [gameStarted, setGameStarted] = useState(false);
    const onSubmit = (data) => {
        localStorage.setItem("difficulty", data.difficulty);
        localStorage.setItem("fieldSize", data.fieldSize);
        setGameStarted(true);
    };
    if (gameStarted)
        return (
            <GamePage onExit={() => setGameStarted(false)}/>
        );
    return (
        <div className="page start-page">
            <h1>Whac-A-Mole</h1>
            <p>Класична аркадна гра! Спробуй набрати максимум очок 🎯</p>
            <form onSubmit={handleSubmit(onSubmit)} className="difficulty-form">
                <h2>Складність</h2>
                <label className="difficulty-label">
                    <input type="radio" value="easy" {...register("difficulty")} />
                    <span>Легко</span>
                </label>
                <label className="difficulty-label">
                    <input type="radio" value="hard" {...register("difficulty")} />
                    <span>Важко</span>
                </label>
                <label className="difficulty-label">
                    <input type="radio" value="impossible" {...register("difficulty")} />
                    <span>Неможливо</span>
                </label>
                <h2>Розмір поля</h2>
                <label className="difficulty-label">
                    <input type="radio" value="3" {...register("fieldSize")} />
                    <span>3 × 3</span>
                </label>
                <label className="difficulty-label">
                    <input type="radio" value="5" {...register("fieldSize")} />
                    <span>5 × 5</span>
                </label>
                <button type="submit" className="btn">Почати гру</button>
            </form>
        </div>
    );
};