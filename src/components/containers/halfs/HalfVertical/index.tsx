import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../providers/slices/theme.slice";
import { TitleDefault } from "../../../texts/TitleDefault";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
  title?: string;
}

function HalfVertical({
  children,
  }: InputProps) {

  const theme = useSelector(selectTheme);

  return (
    <div
      className={styles.half_vertical_container}
      style={{
        backgroundColor: theme.COLORS.CONTAINER_DEFAULT,
      }}
    >
      {children}
    </div>
  )
};

export { HalfVertical };
