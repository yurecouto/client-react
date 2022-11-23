import React from "react";

import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

interface InputProps {
  text?: string;
  wheight?: string;
  textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
}

function TextDefault({
  text,
  wheight= "100",
  textAlign = "center"
  }: InputProps) {

  const theme = useSelector(selectTheme);

  return (
    <h2
      className={styles.text_default}
      style={{
        color: theme.COLORS.TEXT_DEFAULT,
        textAlign: textAlign,
        fontWeight: wheight
      }}
    >
      {text}
    </h2>
  )
};

export { TextDefault };
