import React from "react";
import classes from "./Modal.module.scss";
import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  closeBtn?: boolean; // Optional
  show: boolean;
  closeMethod: () => void;
  overflow?: string; // Optional
  paddingZ?: boolean;
  padding20?: boolean;
}

const ModalContent: React.FC<ModalProps> = ({
  children,
  closeBtn,
  show,
  closeMethod,
  overflow,
  paddingZ = false,
  padding20 = false,
}) => {
  return (
    <div
      className={`${classes.modalOuter} ${show && classes.active} ${
        paddingZ && classes.paddingZ
      } ${padding20 && classes.padding20} ${
        overflow && classes.overflowVisible
      }`}
    >
      <div className={classes.overlay} onClick={closeMethod}></div>
      <div className={classes.modalWrap}>
        {closeBtn && (
          <div className={classes.close} onClick={closeMethod}>
            <img src="/assets/images/close.png" alt="close" />
          </div>
        )}
        <div className={classes.modalBody}>{children}</div>
      </div>
    </div>
  );
};

const Modal: React.FC<ModalProps> = ({
  children,
  closeBtn,
  show,
  closeMethod,
  overflow,
  paddingZ,
  padding20,
}) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalContent
          children={children}
          closeBtn={closeBtn}
          show={show}
          closeMethod={closeMethod}
          overflow={overflow}
          paddingZ={paddingZ}
          padding20={padding20}
        />,
        document.getElementById("modal") as HTMLElement // Type assertion to avoid null error
      )}
    </>
  );
};

export default Modal;
