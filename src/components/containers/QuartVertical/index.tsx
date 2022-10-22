import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";
import { TitleDefault } from "../../texts/TitleDefault";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
  title?: string;
}

function QuartVertical({
  children,
  }: InputProps) {

  const theme = useSelector(selectTheme);

  return (
    <div
      className={styles.quart_vertical_container}
      style={{
        backgroundColor: theme.COLORS.CONTAINER_DEFAULT,
      }}
    >
      <TitleDefault title="quart vertical"/>

      {children}
    </div>
  )
};

export { QuartVertical };
