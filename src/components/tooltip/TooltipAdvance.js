import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "../Portal";

const TooltipAdvance = ({ title, children }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const handleMouseEnter = (e) => {
    setCoords(e.target.getBoundingClientRect());
    setVisible(true);
  };
  const handleMouseLeave = () => {
    setVisible(false);
  };
  return (
    <div className="relative inline-block">
      <CSSTransition in={visible} unmountOnExit classNames="fade" timeout={300}>
        {(status) => (
          <Portal visible={status !== "exited"} overlay={false}>
            <p
              className="z-[9999] transition-all tooltip p-3 bg-black text-white rounded-lg text-xs inline-block absolute -translate-y-full -translate-x-2/4"
              style={{
                top: coords.top - coords.height / 2 + window.scrollY,
                left: coords.left + coords.width / 2,
              }}
            >
              {children}
            </p>
          </Portal>
        )}
      </CSSTransition>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {title}
      </div>
    </div>
  );
};

export default TooltipAdvance;
