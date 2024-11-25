import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import classes from "./Toast.module.scss";
import ToastInnerComponent from "./ToastInnerComponent";

// Define the type for each message object
interface ToastMessage {
  id?: string; // Assuming each message has an ID
  message: string;
  type: string;
  timeout: number;
}

const ToastComponent: React.FC = () => {
  // Select messages from the Redux store
  const messages = useSelector(
    (state: any) => state.toast.messages as ToastMessage[]
  );

  return (
    <div className={classes.toastContainer}>
      {messages.map((msg: any) => (
        <ToastInnerComponent key={msg.message} msg={msg} />
      ))}
    </div>
  );
};

const Toast: React.FC = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <ToastComponent />,
        document.getElementById("toast") as HTMLElement // Type assertion ensures the element exists
      )}
    </>
  );
};

export default Toast;
