import React from "react";

import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

interface InputProps {
  subtitle?: string;
  textAlign?: "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";
}

function SubtitleDefault({
  subtitle,
  textAlign = "center"
  }: InputProps) {

  const theme = useSelector(selectTheme);

  return (
    <h2
      className={styles.subtitle_default}
      style={{
        color: theme.COLORS.TEXT_DEFAULT,
        textAlign: textAlign
      }}
    >
      {subtitle}
    </h2>
  )
};

export { SubtitleDefault };
