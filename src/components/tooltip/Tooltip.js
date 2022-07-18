import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import useHover from "../../hook/useHover";

const Tooltip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoords] = useState();
  const handleHover = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };
  return (
    <Fragment>
      {hovered && (
        <TooltipContent children={children} coords={coords}></TooltipContent>
      )}
      <span className="font-semibold" ref={nodeRef} onMouseOver={handleHover}>
        {text}
      </span>
    </Fragment>
  );
};

function TooltipContent({ children, coords }) {
  if (typeof document === "undefined") return;
  console.log(coords);
  return ReactDOM.createPortal(
    <p
      className="p-3 bg-black text-white rounded-lg text-xs inline-block absolute -translate-y-full -translate-x-2/4"
      style={{
        top: coords.top - coords.height / 2,
        left: coords.left + coords.width / 2,
      }}
    >
      {children}
    </p>,
    document.querySelector("body")
  );
}

export default Tooltip;
