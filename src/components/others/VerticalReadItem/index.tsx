import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import styles from "./styles.module.css";
import { selectTheme } from "../../../providers/slices/theme.slice";
import { VerticalLineDefault } from "../VerticalLineDefault";

interface InputProps {
  name?: string;
  description?: string;
  info?: string;
  route?: string;
  bgColor?: string;
  hoverColor?: string;
  page?: boolean;
  iconBgColor?: string,
  iconHoverColor?: string,
  handleDeleteItem?: (param: any) => void;
  handleUpdateItem?: (param: any) => void;
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
  page,

  handleDeleteItem,
  handleUpdateItem
  }: InputProps) {
  const theme = useSelector(selectTheme);

  if (
    bgColor === "" &&
    hoverColor === "") {
      hoverColor = theme.COLORS.CONTAINER_DEFAULT_HOVER
      bgColor = theme.COLORS.CONTAINER_DEFAULT
  }

  const [hover, setHover] = useState<boolean>();
  const [hoverPencil, setHoverPencil] = useState<boolean>();
  const [hoverTrash, setHoverTrash] = useState<boolean>();

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const handleMouseInPencil = () => {
    setHoverPencil(true);
  };

  const handleMouseOutPencil = () => {
    setHoverPencil(false);
  };

  const handleMouseInTrash = () => {
    setHoverTrash(true);
  };

  const handleMouseOutTrash = () => {
    setHoverTrash(false);
  };

  const handleDelete = async () => {
    // configurar alert
    // handleDeleteItem()
  }

  const handleUpdate = async () => {
    // configurar navigate
    // handleUpdateItem()
  }

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
        </div>
      <div className={styles.vertical_read_item_icon_container}>
        <Icon
          className={styles.vertical_read_item_icon_item}
          icon={"mdi:lead-pencil"}
          onMouseEnter={handleMouseInPencil}
          onMouseLeave={handleMouseOutPencil}
          style={{
            color: hoverPencil ?
            theme.COLORS.VIOLET_DEFAULT_HOVER :
            theme.COLORS.VIOLET_DEFAULT
          }}
          onClick={() => handleUpdate()}
        />

        <Icon
          className={styles.vertical_read_item_icon_item}
          icon={"ph:trash-fill"}
          onMouseEnter={handleMouseInTrash}
          onMouseLeave={handleMouseOutTrash}
          style={{
            color: hoverTrash ?
            theme.COLORS.RED_DEFAULT_HOVER :
            theme.COLORS.RED_DEFAULT
          }}
          onClick={() => handleDelete()}
        />
      </div>
    </div>
  )
};

export { VerticalReadItem };
