import { useCallback } from "react";

export const UseScore = (score, setScore) => {
    const increaseScore = useCallback((points = 10) => {
        setScore(prev => prev + points);
    }, [setScore]);
    const resetScore = useCallback(() => {
        setScore(0);
    }, [setScore]);
    return { score, increaseScore, resetScore };
};