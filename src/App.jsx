import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
  };

  return (
    <div>
      <h1>Random Number Generator</h1>

      {number === null ? (
        <p>No number generated yet</p>
      ) : (
        <h2>Generated Number: {number}</h2>
      )}

      <button onClick={generateNumber}>
        Generate Random Number
      </button>
    </div>
  );
}

export default App;