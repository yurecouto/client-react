import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { selectTheme } from "../../../providers/slices/theme.slice";
import { ItemTitleDefault } from "../../texts/ItemTitleDefault";

import styles from "./styles.module.css";
import { IconDefault } from "../../others/IconDefault";

interface InputProps {
  title?: string;
  route?: string;
  bgColor?: string;
  icon?: string;
  hoverColor?: string;
  page?: boolean;
}

function VerticalItem({
  title,
  route = "/",
  bgColor = "",
  hoverColor = "",
  icon = "",
  page
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
        backgroundColor: page ? hoverColor :
        hover ? hoverColor : bgColor,
      }}
    >
      <Link
        style={{textDecoration: "none"}}
        to={route}
      >
        <div
          className={styles.vertical_item}
        >
          <IconDefault
            icon={icon}
            bgColor={ page ? hoverColor : hover ? hoverColor : bgColor }
            hoverColor={ hover ?
              theme.COLORS.ITEM_DEFAULT_HOVER :
              theme.COLORS.ITEM_DEFAULT }
          />
          <ItemTitleDefault title={title}/>
        </div>
      </Link>
    </div>
  )
};

export { VerticalItem };
