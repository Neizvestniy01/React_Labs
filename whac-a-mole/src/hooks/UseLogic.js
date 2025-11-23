import { useState, useEffect, useCallback } from "react";

const difficultyTimes = { easy: 1000, hard: 500, impossible: 300 };

export function UseLogic(difficulty = "easy", fieldSize = 3) {
    const cols = Number(fieldSize) || 3;
    const totalHoles = cols * cols;
    const moleTime = difficultyTimes[difficulty] ?? 1000;
    const [timeLeft, setTimeLeft] = useState(30);
    const [isPlaying, setIsPlaying] = useState(false);
    const [moleIndex, setMoleIndex] = useState(null);

    useEffect(() => {
        let timerInterval;
        let moleInterval;
        if (isPlaying) {
            setTimeLeft(30);
            setMoleIndex(null);
            moleInterval = setInterval(() => {
                setMoleIndex(Math.floor(Math.random() * totalHoles));
            }, moleTime);
            timerInterval = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(timerInterval);
                        clearInterval(moleInterval);
                        setIsPlaying(false);
                        setMoleIndex(null);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            clearInterval(timerInterval);
            clearInterval(moleInterval);
        };
    }, [isPlaying, moleTime, totalHoles]);
    const startGame = useCallback(() => setIsPlaying(true), []);
    const endGame = useCallback(() => {
        setIsPlaying(false);
        setMoleIndex(null);
    }, []);
    const hitMole = useCallback(
        index => {
            if (isPlaying && index === moleIndex) {
                setMoleIndex(null);
                return true;
            }
            return false;
        },
        [isPlaying, moleIndex]
    );
    return { moleIndex, timeLeft, isPlaying, startGame, endGame, hitMole, totalHoles, cols };
}