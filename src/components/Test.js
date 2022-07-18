import { useEffect, useState } from "react";

function Test({ number, setNumber }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(number);
  }, [number]);
  const handleClickUp = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    setNumber(newCounter);
  };
  const handleClickDown = () => {
    const newCounter = counter - 1;
    setCounter(newCounter);
    setNumber(newCounter);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleClickUp}>+</button>
      <button onClick={handleClickDown}>-</button>
    </div>
  );
}

export default Test;
