import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";
import styles from "./styles.module.css";

interface InputProps {
  icon?: string;
  bgColor?: string;
  hoverColor?: string;
  width?: string;
  handleSomething?: (param: any) => void;
}

function IconButton({
  icon = "material-symbols:question-mark",
  bgColor = "",
  hoverColor = "",
  handleSomething,
  width = "40%"
  }: InputProps) {
  const theme = useSelector(selectTheme);

  if (
    bgColor === "" &&
    hoverColor === "") {
      bgColor = theme.COLORS.ITEM_DEFAULT
      hoverColor = theme.COLORS.ITEM_DEFAULT_HOVER
  }

  const [hover, setHover] = useState<boolean>();

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <Icon
      className={styles.icon_button}
      icon={icon}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
      style={{
        color: hover ?
        theme.COLORS.ITEM_DEFAULT_HOVER :
        theme.COLORS.ITEM_DEFAULT
      }}
      onClick={() => handleSomething}
    />
  )
};

export { IconButton };
