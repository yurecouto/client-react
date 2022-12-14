import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
  title?: string;
}

function HalfHorizontal({
  children,
  title
  }: InputProps) {

  const theme = useSelector(selectTheme);

  return (
    <div
      className={styles.half_horizontal_container}
      style={{
        backgroundColor: theme.COLORS.CONTAINER_DEFAULT,
      }}
    >
      <div
        className={styles.half_horizontal_sub_container}
      >
        {children}
      </div>
    </div>
  )
};

export { HalfHorizontal };
