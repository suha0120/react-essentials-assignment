import { useState } from "react";
import PortfolioCard from "./components/PortfolioCard";
import MovieExplorer from "./components/MovieExplorer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="theme-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light" : "🌙 Toggle Theme"}
        </button>
      </div>

      <PortfolioCard
        darkMode={darkMode}
      />

      <MovieExplorer />
    </div>
  );
}

export default App;