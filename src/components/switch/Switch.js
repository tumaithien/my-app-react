import React from "react";

const Switch = (props) => {
  const { on, onClick, ...rest } = props;
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={on}
          onClick={onClick}
          className="toggle-input"
          {...rest}
        />
        <div
          className={`inline-block w-[100px] h-[52px] relative cursor-pointer rounded-full p-1 transition-all ${
            on ? "bg-purple-400" : "bg-gray-400"
          }`}
        >
          <span
            className={`transition-all w-11 h-11 rounded-full bg-white inline-block ${
              on ? "translate-x-[48px]" : ""
            }`}
          ></span>
        </div>
      </label>
    </>
  );
};

export default Switch;
