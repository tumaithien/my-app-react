import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import useClickOutside from "../hook/useClickOutside";

const DropdownPortal = () => {
  const { setShow, show, nodeRef } = useClickOutside();
  const [coords, setCoords] = useState({});
  const handleClickShow = (e) => {
    console.log(nodeRef.current.getBoundingClientRect()); //Lấy tọa độ của Block click vào
    setCoords(nodeRef.current.getBoundingClientRect());
    setShow(!show);
  };
  return (
    <div className="relative w-full max-w-[400px]" ref={nodeRef}>
      <div
        className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        onClick={handleClickShow}
      >
        Selected
      </div>
      {show && <DropdownList coords={coords}></DropdownList>}
    </div>
  );
};

function DropdownList({ coords }) {
  if (typeof document === "undefined") return;
  return ReactDOM.createPortal(
    <div
      className="border border-gray-200 rounded-lg absolute top-full left-0 w-full bg-white transition-all"
      style={{
        left: coords.left,
        top: coords.top + coords.height + window.scrollY,
        width: coords.width,
      }}
    >
      <div className="p-5">Javascript</div>
      <div className="p-5">React js</div>
      <div className="p-5">Vue js</div>
    </div>,
    document.querySelector("body")
  );
}

export default DropdownPortal;
