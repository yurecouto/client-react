import React from "react";

import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

interface InputProps {
  title?: string;
  textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
}

function TitleDefault({
  title,
  textAlign = "center"
  }: InputProps) {

  const theme = useSelector(selectTheme);

  return (
    <h2
      className={styles.title_default}
      style={{
        color: theme.COLORS.TEXT_DEFAULT,
        textAlign: textAlign
      }}
    >
      {title}
    </h2>
  )
};

export { TitleDefault };
