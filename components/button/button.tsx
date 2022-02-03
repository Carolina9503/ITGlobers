import React from "react";
import styles from "./button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ type = "submit", text, ...props }: ButtonProps) => {
  return (
    <button type={type} className={styles.button} {...props}>
      {text}
    </button>
  );
};

export default Button;
