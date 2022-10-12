import { useState } from "react";

import styles from "./styles.module.css";
import theme from "../../../themes/index";

interface InputProps {
  value?: string;
  type?: string;
  label?: string;
  bgColor?: string;
  color?: string;
  hoverColor?: string;
  caretColor?: string;
  setValue?: (param: any) => void;
}

function Input({
  type = "input",
  label,
  setValue,
  bgColor,
  color,
  hoverColor,
  caretColor
}: InputProps) {
  const [hover, setHover] = useState<boolean>();

  const handleMouseIn = () => { setHover(true); };
  const handleMouseOut = () => { setHover(false); };

  return (
    <div className={styles.input_container}>
      <input
        className={styles.input}
        type={type}
        required
        onChange={setValue}
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
        style={{
          backgroundColor: bgColor,
          borderColor: hover ? hoverColor : color,
          caretColor: caretColor
        }}
      />
      <span
        className={styles.label}
        style={{
          backgroundColor: bgColor,
          color: hover ? hoverColor : color,
        }}
      >
        {label}
      </span>
    </div>
  )
};

export { Input };
