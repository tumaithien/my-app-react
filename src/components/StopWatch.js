import React from "react";

const Stopwatch = () => {
  const timeRef = React.useRef(null);
  const [count, setCount] = React.useState(0);
  const handleStart = () => {
    if (timeRef.current) return;
    timeRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };
  React.useEffect(() => {
    return () => {
      clearInterval(timeRef.current);
      timeRef.current = null;
    };
  }, []);
  return (
    <div>
      <h3>Timer: {count}S</h3>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

export default Stopwatch;
