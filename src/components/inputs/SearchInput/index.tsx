import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";
import { IconButton } from "../../buttons/IconButton";

import styles from "./styles.module.css";

interface InputProps {
  value?: string;
  type?: string;
  label?: string;
  bgColor?: string;
  fontColor?: string;
  hoverColor?: string;
  caretColor?: string;
  setValue?: (param: any) => void;
}

function SearchInput({
  type = "input",
  label,
  setValue,
  bgColor = "",
  fontColor = "",
  hoverColor = "",
}: InputProps) {
  const theme = useSelector(selectTheme);

  if (
    bgColor === "" &&
    hoverColor === "" &&
    fontColor === "") {
      hoverColor = theme.COLORS.ITEM_DEFAULT_HOVER
      fontColor = theme.COLORS.ITEM_DEFAULT
      bgColor = theme.COLORS.CONTAINER_DEFAULT
  }

  const [hover, setHover] = useState<boolean>();

  const handleMouseIn = () => { setHover(true); };
  const handleMouseOut = () => { setHover(false); };

  return (
    <div className={styles.search_input_container}>
      <input
        className={styles.search_input}
        type={type}
        required
        onChange={setValue}
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
        style={{
          backgroundColor: bgColor,
          borderColor: hover ? hoverColor : fontColor,
          caretColor: theme.COLORS.TEXT_DEFAULT,
          color: theme.COLORS.TEXT_DEFAULT
        }}
      />
      <button
        onMouseOver={handleMouseIn}
        onMouseOut={handleMouseOut}
        className={styles.search_input_button}
        style={{
          backgroundColor: hover ? hoverColor : fontColor,
          borderColor: hover ? hoverColor : fontColor,
          color: theme.COLORS.TEXT_DEFAULT,
        }}
      >
        <Icon
          className={styles.search_input_button_icon}
          icon="material-symbols:search"
        />
      </button>

    </div>
  )
};

export { SearchInput };
