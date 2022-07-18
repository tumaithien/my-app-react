import "./App.css";
import React, { useState } from "react";
import Test from "./components/Test";

function App() {
  const [number, setNumber] = useState(0);
  const handleReset = () => {
    setNumber(0);
  };
  const setSetNumber = (newValue) => {
    setNumber(newValue);
    console.log(newValue);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={handleReset}>Reset</button>
      <Test number={number} setNumber={setSetNumber}></Test>
    </div>
  );
}

export default App;
