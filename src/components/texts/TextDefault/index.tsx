import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

interface InputProps {
  text?: string;
}

function TextDefault({
  text,
  }: InputProps) {

  const theme = useSelector(selectTheme);

  return (
    <p
      className={styles.text_default}
      style={{color: theme.COLORS.TEXT_DEFAULT}}
    >
      {text}
    </p>
  )
};

export { TextDefault };
