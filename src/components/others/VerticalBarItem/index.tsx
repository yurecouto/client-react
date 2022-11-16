import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { selectTheme } from "../../../providers/slices/theme.slice";
import { Icon } from '@iconify/react';

import styles from "./styles.module.css";

interface InputProps {
  title?: string;
  route?: string;
  bgColor?: string;
  icon?: string;
  hoverColor?: string;
  page?: boolean;
  iconBgColor?: string,
  iconHoverColor?: string,
}

function VerticalBarItem({
  title,
  route = "/",
  bgColor = "",
  hoverColor = "",
  iconBgColor = "",
  iconHoverColor = "",
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
          <Icon
            className={styles.vertical_item_icon}
            icon={icon}
            style={{
              backgroundColor: page ? iconHoverColor : hover ? iconHoverColor : iconBgColor ,
              color: hover ?
              theme.COLORS.ITEM_DEFAULT_HOVER :
              theme.COLORS.ITEM_DEFAULT
            }}
          />
          <div className={styles.vertical_item_title}>
            <h3
              className={styles.vertical_item_title_text}
              style={{color: theme.COLORS.TEXT_DEFAULT}}
            >
              {title}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  )
};

export { VerticalBarItem };
