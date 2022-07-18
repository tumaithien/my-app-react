import React from "react";
import useClickOutside from "../hook/useClickOutside";

const Dropdown = () => {
  const { setShow, show, nodeRef } = useClickOutside();
  return (
    <div className="relative w-full max-w-[400px]" ref={nodeRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={() => setShow(!show)}
      >
        Selected
      </div>
      {show && (
        <div className="border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white transition-all">
          <div className="p-5">Javascript</div>
          <div className="p-5">React js</div>
          <div className="p-5">Vue js</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
