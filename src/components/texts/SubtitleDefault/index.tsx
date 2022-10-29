import React from "react";

import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

interface InputProps {
  subtitle?: string;
}

function SubtitleDefault({
  subtitle,
  }: InputProps) {

  const theme = useSelector(selectTheme);

  return (
    <h2
      className={styles.subtitle_default}
      style={{color: theme.COLORS.TEXT_DEFAULT}}
    >
      {subtitle}
    </h2>
  )
};

export { SubtitleDefault };
