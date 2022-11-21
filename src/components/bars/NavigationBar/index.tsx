import React from "react";

import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import { VerticalBarItem } from "../../others/VerticalBarItem";
import { LineDefault } from "../../others/LineDefault";

import styles from "./styles.module.css";

interface InputProps {
  page?: string
}

function NavigationBar({ page }: InputProps) {
  const theme = useSelector(selectTheme);

  return (
    <nav
      className={styles.navigation_bar}
      style={{backgroundColor: theme.COLORS.CONTAINER_DEFAULT}}
    >
      <div className={styles.navigation_bar_title}>

      </div>

      <div
        className={styles.navigation_bar_items}
      >
        <LineDefault/>
        <VerticalBarItem
          title={"Home"}
          icon={"bxs:home"}
          route={"/home"}
          page={page === "/home"}
        />
        <LineDefault/>
        <VerticalBarItem
          title={"Users"}
          icon={"bxs:user"}
          route={"/users"}
          page={page === "/users"}
        />
        <LineDefault/>
        <VerticalBarItem
          title={"Products"}
          icon={"fluent:box-16-filled"}
          route={"/products"}
          page={page === "/products"}
        />
        <LineDefault/>
        <VerticalBarItem
          title={"Sells"}
          icon={"ic:baseline-sell"}
          route={"/sells"}
          page={page === "/sells"}
        />
        <LineDefault/>
        <VerticalBarItem
          title={"Settings"}
          icon={"fa6-solid:gear"}
          route={"/settings"}
          page={page === "/settings"}
        />
        <LineDefault/>
      </div>

      <div className={styles.navigation_bar_foot}>
        {/* <TextDefault text="All Rights Reserved © 2022"/>
        <TextDefault text=" Made by: @yurecouto"/> */}
      </div>
    </nav>
  )
};

export { NavigationBar };
