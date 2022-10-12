import { ReactNode } from "react";

import styles from "./styles.module.css";

import theme from "../../../themes/index"

interface InputProps {
  children?: ReactNode;
  title?: string;
}

function LoginContainer({
  children,
  title,
  }: InputProps) {

  return (
    <div
      className={styles.login_container}
      style={{
        backgroundColor: theme.COLORS.LOGIN_BOX
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
