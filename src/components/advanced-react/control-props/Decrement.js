import React from "react";
import { useCount } from "./count-context";

const Decrement = () => {
  const { handleDecrement } = useCount();
  return (
    <>
      <button
        className="decrement flex items-center p-5 justify-center bg-slate-200"
        onClick={handleDecrement}
      >
        -
      </button>
    </>
  );
};

export default Decrement;
