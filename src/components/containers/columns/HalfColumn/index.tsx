import React, { ReactNode } from "react";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
}

function HalfColumn({
  children,
  }: InputProps) {

  return (
    <div
      className={styles.wrapper_half_column_default}
    >
      {children}
    </div>
  )
};

export { HalfColumn };
