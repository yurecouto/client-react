import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

interface InputProps {
  title?: string;
}

function ItemTitleDefault({
  title,
  }: InputProps) {

  const theme = useSelector(selectTheme);

  return (
    <h3
      className={styles.item_title_default}
      style={{color: theme.COLORS.TEXT_DEFAULT}}
    >
      {title}
    </h3>
  )
};

export { ItemTitleDefault };
