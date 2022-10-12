import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
}

function BodyDefault({
  children,
  }: InputProps) {

  const theme = useSelector(selectTheme);

  return (
    <div
      className={styles.body_default}
      style={{
        backgroundColor: theme.COLORS.BODY_DEFAULT,
      }}
    >
      {children}
    </div>
  )
};

export { BodyDefault };
