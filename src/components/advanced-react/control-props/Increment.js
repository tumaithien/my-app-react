import React from "react";
import { useCount } from "./count-context";

const Increment = () => {
  const { handleIncrement } = useCount();
  return (
    <>
      <button
        className="increment flex items-center p-5 justify-center bg-slate-200"
        onClick={handleIncrement}
      >
        +
      </button>
    </>
  );
};

export default Increment;
