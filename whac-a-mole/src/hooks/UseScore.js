import { useState, useCallback } from "react";

export const UseScore = () => {
    const [score, setScore] = useState(0);
    const increaseScore = useCallback((points = 10) => {
        setScore(prev => prev + points);
    }, []);
    const resetScore = useCallback(() => {
        setScore(0);
    }, []);
    return { score, increaseScore, resetScore };
};