import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
  title?: string;
}

function LoginContainer({
  children,
  title,
  }: InputProps) {

  const theme = useSelector(selectTheme);

  return (
    <div
      className={styles.login_container}
      style={{
        backgroundColor: theme.COLORS.LOGIN_BOX,
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
