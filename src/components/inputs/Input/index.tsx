import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

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
}: InputProps) {
  const theme = useSelector(selectTheme);

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
          caretColor: theme.COLORS.TEXT_DEFAULT,
          color: theme.COLORS.TEXT_DEFAULT
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
