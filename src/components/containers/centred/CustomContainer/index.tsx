import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../providers/slices/theme.slice";
import { PageFooter } from "../../../footers/PageFooter";
import { SubtitleDefault } from "../../../texts/SubtitleDefault";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
  justifyContent?: string;
  width?: string;
  height?: string;
}

function CustomContainer({
  children,
  width,
  justifyContent = "space-between",
  height = "96vh"
  }: InputProps) {

  const theme = useSelector(selectTheme);

  return (
    <div
      className={styles.custom_container}
      style={{
        backgroundColor: theme.COLORS.CONTAINER_DEFAULT,
        justifyContent: justifyContent,
        width: width,
        height: height,
      }}
    >
      <div
        className={styles.custom_sub_container}
      >
        {children}
      </div>
    </div>
  )
};

export { CustomContainer };
