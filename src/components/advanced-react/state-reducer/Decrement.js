import React from "react";
import useCounter from "./useCounter";

const Decrement = ({ onClick, ...props }) => {
  return (
    <>
      <button
        className="decrement flex items-center p-5 justify-center bg-slate-200"
        onClick={onClick}
        {...props}
      >
        -
      </button>
    </>
  );
};

export default Decrement;
