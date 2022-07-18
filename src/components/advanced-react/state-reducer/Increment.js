import React from "react";

const Increment = ({ onClick, ...props }) => {
  return (
    <>
      <button
        className="increment flex items-center p-5 justify-center bg-slate-200"
        onClick={onClick}
        {...props}
      >
        +
      </button>
    </>
  );
};

export default Increment;
