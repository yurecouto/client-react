import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
}

function GenericContainer({
  children,
  }: InputProps) {

  const theme = useSelector(selectTheme);

  return (
    <div
      className={styles.line_container}
      style={{
        backgroundColor: theme.COLORS.CONTAINER_DEFAULT,
      }}
    >
      {children}
    </div>
  )
};

export { GenericContainer };
