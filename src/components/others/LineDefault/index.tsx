import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

function LineDefault() {
  const theme = useSelector(selectTheme);

  return (
    <div
      className={styles.line_default}
      style={{ borderTopColor: theme.COLORS.CONTAINER_DEFAULT_HOVER}}
    />
  )
};

export { LineDefault };
