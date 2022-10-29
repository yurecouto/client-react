import React, { ReactNode } from "react";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
}

function WrapperDefault({
  children,
  }: InputProps) {

  return (
    <div
      className={styles.wrapper_default}
    >
      {children}
    </div>
  )
};

export { WrapperDefault };
