import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//Sử dụng create Portal
const Modal = ({ open, handleClose }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div
      className={`modal fixed inset-0 z-50 flex items-center p-5 justify-center ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="overlay absolute inset-0 bg-black bg-opacity-50 "
        onClick={handleClose}
      ></div>
      <div className="modal-content z-10 bg-white relative p-10 rounded-lg w-full max-w-[482px]">
        <span
          onClick={handleClose}
          className="top-0 right-0 absolute cursor-pointer w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 -translate-y-2/4 translate-x-2/4"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
              fill="#84878B"
            />
          </svg>
        </span>
        <h2 className="text-4xl mb-5 text-center text-black font-medium">
          Welcome Back!
        </h2>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Email address
          </label>
          <input
            type="email"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="password" className="text-sm cursor-pointer">
            Password
          </label>
          <input
            type="password"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full p-4 font-semibold text-base text-white bg-[#316BFF] rounded-lg">
          Sign in
        </button>
      </div>
    </div>,
    document.querySelector("body")
  );
};
Modal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};
export default Modal;
