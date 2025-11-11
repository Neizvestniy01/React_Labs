import React, { useState } from "react";
import { useForm } from "react-hook-form";
import GamePage from "./GamePage";
import "../App.css";

export const StartPage = () => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            difficulty: localStorage.getItem("difficulty") || "easy",
        },
    });
    const [gameStarted, setGameStarted] = useState(false);
    const onSubmit = (data) => {
        localStorage.setItem("difficulty", data.difficulty);
        setGameStarted(true);
    };
    if (gameStarted) return <GamePage />;
    return (
        <div className="page start-page">
            <h1>Whac-A-Mole</h1>
            <p>Класична аркадна гра! Спробуй набрати максимум очок 🎯</p>
            <form onSubmit={handleSubmit(onSubmit)} className="difficulty-form">
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
                <button type="submit" className="btn">Почати гру</button>
            </form>
        </div>
    );
};