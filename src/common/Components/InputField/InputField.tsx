import React from "react";
import classes from "./InputField.module.scss";

interface InputFieldProps {
  label?: string;
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputClass?:string;
  showPasswordToggle?: boolean;
  togglePasswordVisibility?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className,
  showPasswordToggle,
  togglePasswordVisibility,
}) => {
  return (
    <div className={`${classes.inputField} ${className}`}>
      {label && <label className={classes.fontLable}>{label}</label>}
      <div className={classes.inputWrapper}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={classes.input}
        />
        {showPasswordToggle && togglePasswordVisibility && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={classes.toggleButton}
          >
            {type === "password" ? "👁️" : "🙈"}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
