import { ReactNode } from "react";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
  title?: string;
  bgColor?: string;
}

function LoginContainer({
  children,
  title,
  bgColor,
  }: InputProps) {

  return (
    <div
      className={styles.login_container}
      style={{
        backgroundColor: bgColor
      }}
    >
      <h1 className={styles.login_container_title}>
        {title}
      </h1>

      {children}
    </div>
  )
};

export { LoginContainer };
