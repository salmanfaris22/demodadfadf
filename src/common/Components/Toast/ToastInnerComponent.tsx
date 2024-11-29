// ToastInnerComponent.tsx
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeToast } from "../../../store/toastSlice";
import classes from "./Toast.module.scss";

interface ToastInnerProps {
  msg: any;
}

const ToastInnerComponent: React.FC<ToastInnerProps> = ({ msg }) => {
  const [active, setActive] = useState(false);
  const [exit, setExit] = useState(false); // To trigger exit animation
  const dispatch = useDispatch();

  useEffect(() => {
    setActive(true);
    const timer = setTimeout(() => {
      setExit(true); // Start exit animation after the timeout
      setTimeout(() => {
        dispatch(removeToast(msg.message)); // Remove toast after animation
      }, 100); // Match the exit animation duration
    }, msg.timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [msg, dispatch]);

  return (
    <div
      className={`${classes.toast} ${active && classes.active} ${exit && classes.exit} ${classes[msg.type]}`}
    >
      {msg.type === "warning" && (
        <img src="/assets/images/warning.png" alt="warning" />
      )}
      {msg.type === "error" && (
        <img src="/assets/images/error.png" alt="error" />
      )}
      {msg.type === "success" && (
        <img src="/assets/images/success.png" alt="success" />
      )}
      {msg.message}
    </div>
  );
};

export default React.memo(ToastInnerComponent);
