import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<StartPage />} />
                <Route path="/game/:userId" element={<GamePage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;