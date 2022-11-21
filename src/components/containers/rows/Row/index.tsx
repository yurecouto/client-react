import React, { ReactNode } from "react";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
  justifyContent?: string;
}

function Row({
  children,
  justifyContent = "space-between"
  }: InputProps) {

  return (
    <div
      className={styles.wrapper_row_default}
      style={{ justifyContent: justifyContent }}
    >
      {children}
    </div>
  )
};

export { Row };
