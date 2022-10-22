import { ReactNode } from "react";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
}

function Column({
  children,
  }: InputProps) {

  return (
    <div
      className={styles.wrapper_column_default}
    >
      {children}
    </div>
  )
};

export { Column };
