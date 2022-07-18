import React, { Fragment } from "react";
import Portal from "../Portal";
import { CSSTransition } from "react-transition-group";

const ModalBase = ({ visible, onClose, children, bodyClassName = "" }) => {
  return (
    <Fragment>
      <CSSTransition in={visible} timeout={250} unmountOnExit classNames="zoom">
        {(status) => (
          <Portal
            visible={status !== "exited"}
            onClose={onClose}
            containerClassName="flex items-center justify-center fixed inset-0 z-[9999]"
            bodyStyle={{ transition: "all 250ms" }}
            bodyClassName={`content z-10 relative ${bodyClassName}`}
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </Fragment>
  );
};

export default ModalBase;
