import { createContext, useState } from "react";
import EndScreen from "../components/EndScreen";
import Menu from "../components/Menu";
import Quiz from "../components/Quiz";

export const GameStateContext = createContext("");

export const AppContextProvider = (props) => {
    const [gameState, setGameState] = useState("menu");
    const [userName, setUserName] = useState("");
    const [score, setScore] = useState(0);

    return (
        <div className="App">
            <h1>Quiz App</h1>
            <GameStateContext.Provider
                value={{
                    gameState,
                    setGameState,
                    userName,
                    setUserName,
                    score,
                    setScore,
                }}
            >
                {gameState === "menu" && <Menu />}
                {gameState === "playing" && <Quiz />}
                {gameState === "finished" && <EndScreen />}
            </GameStateContext.Provider>
        </div>
    );
}
