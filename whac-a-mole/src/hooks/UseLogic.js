import { useState, useEffect, useCallback } from "react";

const difficultyTimes = { easy: 1000, hard: 500, impossible: 300 };

export function UseLogic(difficulty = "easy") {
    const [timeLeft, setTimeLeft] = useState(30);
    const [isPlaying, setIsPlaying] = useState(false);
    const [moleIndex, setMoleIndex] = useState(null);
    const moleTime = difficultyTimes[difficulty];

    useEffect(() => {
        let timerInterval;
        let moleInterval;
        if (isPlaying) {
            setTimeLeft(30);
            moleInterval = setInterval(() => {
                setMoleIndex(Math.floor(Math.random() * 9));
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
    }, [isPlaying, moleTime]);

    const startGame = useCallback(() => setIsPlaying(true), []);
    const endGame = useCallback(() => setIsPlaying(false), []);
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
    return { moleIndex, timeLeft, isPlaying, startGame, endGame, hitMole };
}