import React from "react";
import useClickOutside from "../../../hook/useClickOutside";

const Dropdown = ({
  options,
  placeholder,
  visibleCheck = false,
  placeholderSearch,
  visibleInput,
  onChange = () => {},
}) => {
  const { show, setShow, nodeRef } = useClickOutside();
  const handleDropdownToggle = () => {
    setShow(!show);
  };
  return (
    <div className="relative inline-block w-full max-w-[300px]" ref={nodeRef}>
      <div
        className="placeholder flex items-center p-4 justify-between border border-gray-300 cursor-pointer rounded"
        onClick={handleDropdownToggle}
      >
        {placeholder}
      </div>
      {show && (
        <>
          {visibleInput && (
            <div className="p-2">
              <input
                type="text"
                className="p-3 border border-gray-300 rounded"
                onChange={onChange}
              />
            </div>
          )}
          <div className="options border boder-gray-300 rounded">
            {options &&
              options.length > 0 &&
              options.map((option) => (
                <div
                  className="option-item p-4 cursor-pointer flex items-center justify-between"
                  key={option.title}
                >
                  <span>{option.title}</span>
                  {visibleCheck && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
