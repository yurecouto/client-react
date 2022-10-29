import React from "react";
import { Icon } from '@iconify/react';

import styles from "./styles.module.css";

interface InputProps {
  icon?: string;
  bgColor?: string;
  hoverColor?: string;
}

function IconDefault({
  icon = "",
  bgColor = "",
  hoverColor = "",
  }: InputProps) {
  return (
    <Icon
      icon={icon}
      className={styles.icon_default}
      style={{
        backgroundColor: bgColor,
        color: hoverColor
      }}
    />
  )
};

export { IconDefault };
