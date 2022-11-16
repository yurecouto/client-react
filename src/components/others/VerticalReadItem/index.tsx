import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { selectTheme } from "../../../providers/slices/theme.slice";
import { Icon } from '@iconify/react';

import styles from "./styles.module.css";
import { VerticalLineDefault } from "../VerticalLineDefault";

interface InputProps {
  name?: string;
  description?: string;
  info?: string;
  route?: string;
  bgColor?: string;
  icon?: string;
  hoverColor?: string;
  page?: boolean;
  iconBgColor?: string,
  iconHoverColor?: string,
}

function VerticalReadItem({
  name,
  description,
  info,
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
      className={styles.vertical_read_item_container}
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
          className={styles.vertical_read_item}
        >
          <Icon
            className={styles.vertical_read_item_icon}
            icon={"mdi:user-circle"}
            style={{
              backgroundColor: page ? iconHoverColor : hover ? iconHoverColor : iconBgColor ,
              color: hover ?
              theme.COLORS.ITEM_DEFAULT_HOVER :
              theme.COLORS.ITEM_DEFAULT
            }}
          />

          <VerticalLineDefault/>

          <div className={styles.vertical_read_item_title}>
            <h3
              className={styles.vertical_read_item_title_text}
              style={{color: theme.COLORS.TEXT_DEFAULT}}
            >
              {name}
            </h3>
          </div>

          <VerticalLineDefault/>

          <div className={styles.vertical_read_description_title}>
            <h3
              className={styles.vertical_read_description_title_text}
              style={{color: theme.COLORS.TEXT_DEFAULT}}
            >
              {description}
            </h3>
          </div>

          <VerticalLineDefault/>

          <div className={styles.vertical_read_item_title}>
            <h3
              className={styles.vertical_read_item_title_text}
              style={{color: theme.COLORS.TEXT_DEFAULT}}
            >
              {info}
            </h3>
          </div>

          <VerticalLineDefault/>

          <Icon
            className={styles.vertical_read_item_icon_item}
            icon={"mdi:lead-pencil"}
            style={{
            }}
          />

          <Icon
            className={styles.vertical_read_item_icon_item}
            icon={"ph:trash-fill"}
            style={{
            }}
          />
        </div>
      </Link>
    </div>
  )
};

export { VerticalReadItem };
