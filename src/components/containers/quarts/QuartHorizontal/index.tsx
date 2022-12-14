import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
  title?: string;
}

function QuartHorizontal({
  children,
  }: InputProps) {

  const theme = useSelector(selectTheme);

  return (
    <div
      className={styles.quart_horizontal_container}
      style={{
        backgroundColor: theme.COLORS.CONTAINER_DEFAULT,
      }}
    >
      {children}
    </div>
  )
};

export { QuartHorizontal };
