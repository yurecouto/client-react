import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../../providers/slices/theme.slice";
import { FooterDefault } from "../../../footers/FooterDefault";
import { SubtitleDefault } from "../../../texts/SubtitleDefault";

import styles from "./styles.module.css";

interface InputProps {
  children?: ReactNode;
  title?: string;
}

function HalfHorizontal({
  children,
  title
  }: InputProps) {

  const theme = useSelector(selectTheme);

  return (
    <div
      className={styles.half_horizontal_container}
      style={{
        backgroundColor: theme.COLORS.CONTAINER_DEFAULT,
      }}
    >
      <div
        className={styles.half_horizontal_sub_container}
      >
        <SubtitleDefault
          textAlign="left"
          subtitle={title}
        />
        {children}
      </div>
    </div>
  )
};

export { HalfHorizontal };
