import React, { useRef, useState } from "react";
import { ref } from "yup";

const Count = () => {
  const [count, setCount] = useState(0);
  const renderRef = useRef(0);
  return (
    <div>
      <div>Count: {count}</div>
      <div>Render: {renderRef.current++}</div>
      <button
        className="p-3 rounded bg-blue-400 text-white"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Count;
