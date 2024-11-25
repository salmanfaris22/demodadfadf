import React, { useState } from "react";
import classes from "./Input.module.scss";

// Define props interface
interface InputProps {
  type?: "text" | "password" | "textbox" | "email" | "number"; // Define possible input types
  name: string;
  disabled?: boolean;
  placeholder?: string;
  value: string;
  theme?: "normal" | "dark" | "center"; // Define possible themes
  changeInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void; // Event handler type
}

const Input: React.FC<InputProps> = ({
  type = "text",
  name,
  disabled = false,
  placeholder = "",
  value,
  theme = "normal",
  changeInputHandler,
}) => {
  const [ShowEye, setShowEye] = useState(false);

  const onToggleEye = () => {
    setShowEye((state) => !state);
  };

  return (
    <div className={classes.inputWrap}>
      <input
        className={`${classes.inputBox} ${classes[theme]}`}
        type={type === "password" && ShowEye ? "text" : type}
        id={name}
        placeholder={placeholder}
        name={name}
        value={value}
        disabled={disabled}
        onChange={changeInputHandler}
      />
      {type === "password" && (
        <div className={classes.passwordWrap} onClick={onToggleEye}>
          <img src="/assets/images/eye.png" alt="password visibility toggle" />
          {ShowEye && <div className={classes.cross}></div>}
        </div>
      )}
    </div>
  );
};

export default Input;
