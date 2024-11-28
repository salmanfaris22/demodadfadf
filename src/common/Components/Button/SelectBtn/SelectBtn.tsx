import React, { useState } from "react";
import styles from "./SelectButton.module.scss";

interface SelectButtonProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const SelectButton: React.FC<SelectButtonProps> = ({ options, onSelect }) => {
  const [selected, setSelected] = useState<string>("");

  const handleClick = (option: string) => {
    setSelected(option);
    onSelect(option);
  };

  return (
    <div className={styles.selectButtonContainer}>
      {options.map((option, index) => (
        <button
          key={index}
          className={`${styles.button} ${
            selected === option ? styles.selected : ""
          }`}
          onClick={() => handleClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SelectButton;
