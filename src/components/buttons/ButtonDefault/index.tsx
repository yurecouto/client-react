import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";
import styles from "./styles.module.css";

interface InputProps {
  title?: string;
  bgColor?: string;
  hoverColor?: string;
  handleSomething?: (param: any) => void;
}

function ButtonDefault({
  title,
  bgColor = "",
  hoverColor = "",
  handleSomething,
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
    <button
      className={styles.standard_button}
      onMouseOver={handleMouseIn}
      onMouseOut={handleMouseOut}
      onClick={handleSomething}
      style={{
        backgroundColor: hover ? hoverColor : bgColor,
        color: "#fff",
    }} >

      {title}

    </button>
  )
};

export { ButtonDefault };
