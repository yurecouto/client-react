import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

interface InputProps {
  value?: string;
  type?: string;
  label?: string;
  bgColor?: string;
  fontColor?: string;
  hoverColor?: string;
  caretColor?: string;
  setValue?: (param: any) => void;
}

function Input({
  type = "input",
  label,
  setValue,
  bgColor = "",
  fontColor = "",
  hoverColor = "",
}: InputProps) {
  const theme = useSelector(selectTheme);

  if (
    bgColor === "" &&
    hoverColor === "" &&
    fontColor === "") {
      hoverColor = theme.COLORS.ITEM_DEFAULT_HOVER
      fontColor = theme.COLORS.ITEM_DEFAULT
      bgColor = theme.COLORS.CONTAINER_DEFAULT
  }

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
          borderColor: hover ? hoverColor : fontColor,
          caretColor: theme.COLORS.TEXT_DEFAULT,
          color: theme.COLORS.TEXT_DEFAULT
        }}
      />
      <span
        className={styles.label}
        style={{
          backgroundColor: bgColor,
          color: hover ? hoverColor : fontColor,
        }}
      >
        {label}
      </span>
    </div>
  )
};

export { Input };
