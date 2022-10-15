import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { selectTheme } from "../../../providers/slices/theme.slice";
import { ItemTitleDefault } from "../../titles/ItemTitleDefault";

import styles from "./styles.module.css";

interface InputProps {
  title?: string;
  route?: string;
  bgColor?: string;
  hoverColor?: string;
}

function VerticalItem({
  title,
  route = "/",
  bgColor = "",
  hoverColor = "",
  }: InputProps) {
  const theme = useSelector(selectTheme);

  if (
    bgColor === "" &&
    hoverColor === "") {
      hoverColor = theme.COLORS.CONTAINER_DEFAULT_HOVER
      bgColor = theme.COLORS.CONTAINER_DEFAULT
  }

  const [hover, setHover] = useState<boolean>();

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };


  return (
    <div
      className={styles.vertical_item_container}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
      style={{
        backgroundColor: hover ? hoverColor : bgColor,
      }}
    >
      <Link
        style={{textDecoration: "none"}}
        to={route}
      >
        <div
          className={styles.vertical_item}

        >
          <ItemTitleDefault title={title}/>
        </div>
      </Link>
    </div>
  )
};

export { VerticalItem };
