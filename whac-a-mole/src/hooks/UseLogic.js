import { useState, useEffect, useCallback } from "react";
import { UseScore } from "./UseScore";

export function UseLogic(score, setScore) {
    const { increaseScore, resetScore } = UseScore(score, setScore);
    const [timeLeft, setTimeLeft] = useState(30);
    const [isPlaying, setIsPlaying] = useState(false);
    const [moleIndex, setMoleIndex] = useState(null);

    useEffect(() => {
        let timerInterval;
        let moleInterval;
        if (isPlaying) {
            setTimeLeft(30);
            resetScore();
            timerInterval = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(timerInterval);
                        clearInterval(moleInterval);
                        setIsPlaying(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            moleInterval = setInterval(() => {
                setMoleIndex(Math.floor(Math.random() * 9));
            }, 1000);
        }
        return () => {
            clearInterval(timerInterval);
            clearInterval(moleInterval);
        };
    }, [isPlaying, resetScore]);

    const startGame = useCallback(() => {
        setIsPlaying(true);
    }, []);
    const endGame = useCallback(() => {
        setIsPlaying(false);
    }, []);
    const hitMole = useCallback((index) => {
        if (index === moleIndex && isPlaying) {
            increaseScore(10);
            setMoleIndex(null);
        }
    }, [isPlaying, moleIndex, increaseScore]);
    return { score, timeLeft, moleIndex, isPlaying, startGame, endGame, hitMole };
}