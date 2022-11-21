import React, { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import { TitleDefault } from "../../texts/TitleDefault";

import styles from "./styles.module.css";

interface InputProps {
  title?: string;
  children?: ReactNode;
}

function HeaderDefault({
  title,
  children
  }: InputProps) {

  const theme = useSelector(selectTheme);

  return (
    <div
      className={styles.header_default_container}
    >
      <TitleDefault
        textAlign="left"
        title={title}
      />

      {children}
    </div>
  )
};

export { HeaderDefault };
