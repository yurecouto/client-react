import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

interface InputProps {
  title?: string;
}

function TitleDefault({
  title,
  }: InputProps) {

  const theme = useSelector(selectTheme);

  return (
    <h1
      className={styles.title_default}
      style={{color: theme.COLORS.TEXT_DEFAULT}}
    >
      {title}
    </h1>
  )
};

export { TitleDefault };
