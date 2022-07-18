import React, { useEffect, useRef } from "react";

const Input = () => {
  const inputRef = useRef();
  useEffect(() => {
    if(inputRef.current) inputRef.current.focus();
  },[]);
  return (
    <div className="input-div">
      <input
        ref={inputRef}
        type="text"
        placeholder="Input auto focus"
        className="inline-block border border-gray-200 p-5 rounded-lg focus:border-blue-400"
      />
    </div>
  );
};

export default Input;
