import React from "react";

import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

function VerticalLineDefault() {
  const theme = useSelector(selectTheme);

  return (
    <div
      style={{ backgroundColor: theme.COLORS.CONTAINER_DEFAULT_HOVER }}
      className={styles.vertical_read_item_line}
    />
  )
};

export { VerticalLineDefault };
