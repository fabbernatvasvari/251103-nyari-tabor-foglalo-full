import { useState } from 'react'
import './App.css'

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
    <div style={{
      padding: 20,
      margin: 20
    }}>
      <button onClick={toggleTheme} className="theme-toggle">
        {isDarkMode ? '☀️ Sötét Mód' : '🌙 Világos Mód'}
      </button>
    </div>
    </>
  );
}

export default App
