import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../providers/slices/theme.slice";
import { TitleDefault } from "../../../texts/TitleDefault";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
  title?: string;
}

function LoginContainer({
  children,
  }: InputProps) {

  const theme = useSelector(selectTheme);

  return (
    <div
      className={styles.login_container}
      style={{
        backgroundColor: theme.COLORS.CONTAINER_DEFAULT,
      }}
    >
      <TitleDefault title="Login"/>

      {children}
    </div>
  )
};

export { LoginContainer };
