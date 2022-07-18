import React from "react";
import useClickOutside from "../../../hook/useClickOutside";
import { DropdownProvider } from "./dropdown-context";

const Dropdown = ({ placeholder, children, ...props }) => {
  const { show, setShow, nodeRef } = useClickOutside();
  const handleDropdownToggle = () => {
    setShow(!show);
  };

  return (
    <DropdownProvider {...props}>
      <div className="relative inline-block w-full max-w-[300px]" ref={nodeRef}>
        <div
          className="placeholder flex items-center p-4 justify-between border border-gray-300 cursor-pointer rounded"
          onClick={handleDropdownToggle}
        >
          {placeholder}
        </div>
        {show && children}
      </div>
    </DropdownProvider>
  );
};

export default Dropdown;
