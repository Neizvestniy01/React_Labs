import React, { useState } from "react";
import { StartPage } from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultPage from "./pages/ResultPage";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("start");
  const [score, setScore] = useState(0);
  const goToGame = () => setCurrentPage("game");
  const goToResult = () => setCurrentPage("result");
  const goToStart = () => setCurrentPage("start");
  return (
      <div className="app">
        {currentPage === "start" && <StartPage onStart={goToGame} />}
        {currentPage === "game" && (
            <GamePage score={score} setScore={setScore} onEnd={goToResult} />
        )}
        {currentPage === "result" && (
            <ResultPage score={score} onRestart={goToStart} />
        )}
      </div>
  );
};
export default App;