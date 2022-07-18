import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}
const portalWrapper = createPortalWrapper();
const Portal = ({
  containerClassName = "",
  bodyClassName = "",
  onClose = () => {},
  overlay = true,
  containerStyle = {},
  bodyStyle = {},
  children,
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapper);
  }, []);
  const renderContent = (
    <div className={containerClassName} style={containerStyle}>
      {overlay && (
        <div
          className="overlay absolute inset-0 bg-black bg-opacity-40"
          onClick={onClose}
        ></div>
      )}

      <div className={bodyClassName} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
  return createPortal(renderContent, portalWrapper);
};

Portal.propTypes = {
  containerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  onClose: PropTypes.func,
  visible: PropTypes.bool.isRequired,
  containerStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  children: PropTypes.node,
  overlay: PropTypes.bool,
};

export default Portal;
