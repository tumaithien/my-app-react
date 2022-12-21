import "./ToggleStyle.css";
import React from "react";
import useToggle from "../hook/useToggle";

function Toggle() {
  const { active, handleToggle } = useToggle();
  return (
    <>
      <div
        className={`toggle ${active ? "active" : ""}`}
        onClick={handleToggle}
      >
        <div className={`spinner ${active ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
                <div className="toggle-on" onClick={() => setOn(true)}>ON</div>
                <div className="toggle-off" onClick={() => setOn(false)}>OFF</div>
            </div> */}
    </>
  );
}

export default Toggle;
