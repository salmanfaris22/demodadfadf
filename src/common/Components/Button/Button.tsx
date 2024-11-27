import React from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "google" | "facebook"; // Define variants
  className?: string; // Optional for extra styling
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  return (
    <button
      className={`${classes.button} ${classes[variant]} ${className}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
