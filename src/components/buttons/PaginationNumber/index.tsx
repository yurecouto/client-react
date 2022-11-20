import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";
import styles from "./styles.module.css";

interface InputProps {
  page?: string;
  fill?: boolean;
  bgColor?: string;
  hoverColor?: string;
  width?: string;
  handleSomething?: (param: any) => void;
}

function PaginationNumber({
  page,
  fill,
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
      className={styles.pagination_number_button}
      icon={`bi:${page}-square${fill ? "-fill" : ""}`}
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

export { PaginationNumber };
