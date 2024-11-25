import React, { useEffect, useState } from "react";
import classes from "./Toast.module.scss";
import { useDispatch } from "react-redux";
import { removeToast } from "../../../store/toast";
// Define the props for the ToastInnerComponent
interface ToastMessage {
  id: string; // Assuming there's a unique identifier
  message: string;
  type: "warning" | "error" | "success" | string; // Allowing any string type for more flexibility
  timeout: number;
}

interface ToastInnerComponentProps {
  msg: ToastMessage;
}

const ToastInnerComponent: React.FC<ToastInnerComponentProps> = ({ msg }) => {
  const [active, setActive] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setActive(true);
    const timer = setTimeout(() => {
      setActive(false);
      setTimeout(() => {
        dispatch(removeToast(msg)); // Use `id` as a unique identifier instead of `message`
      }, 500); // Add some delay to allow for CSS transition (optional)
    }, msg.timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [msg, dispatch]);

  return (
    <div className={`${classes.toast} ${active ? classes.active : ""}`}>
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
