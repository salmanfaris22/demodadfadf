import React from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  full?: boolean;
  theme?: "blue" | "red" | "green" | "yellow" | "white"; 
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  full = false,
  theme = "blue",
}) => {
  return (
    <div
      className={`${classes.button} ${disabled && classes.disabled} ${
        full && classes.full
      } ${classes[theme]}`}
      onClick={disabled ? () => {} : onClick}
    >
      {children}
    </div>
  );
};

export default Button;
