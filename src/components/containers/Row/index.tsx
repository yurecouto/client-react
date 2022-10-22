import { ReactNode } from "react";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
}

function Row({
  children,
  }: InputProps) {

  return (
    <div
      className={styles.wrapper_row_default}
    >
      {children}
    </div>
  )
};

export { Row };
