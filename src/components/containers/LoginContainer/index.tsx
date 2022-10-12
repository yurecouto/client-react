import { ReactNode } from "react";
import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
  title?: string
}

function LoginContainer({
  children,
  title }: InputProps) {

  return (
    <div
      className={styles.login_container}
      style={{
        backgroundColor: "#444"
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
