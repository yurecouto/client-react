import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import { SubtitleDefault } from "../../texts/SubtitleDefault";
import { TitleDefault } from "../../texts/TitleDefault";
import { VerticalItem } from "../../containers/VerticalItem";
import { LineDefault } from "../../others/LineDefault";
import { TextDefault } from "../../texts/TextDefault";

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

      <TitleDefault title={"Client"}/>
      <SubtitleDefault subtitle={"Administration"}/>

      <div
        className={styles.navigation_bar_items}
      >
        <LineDefault/>
        <VerticalItem
          title={"Home"}
          icon={"bxs:home"}
          route={"/home"}
          page={page === "/home"}
        />
        <LineDefault/>
        <VerticalItem
          title={"Users"}
          icon={"bxs:user"}
          route={"/users"}
          page={page === "/users"}
        />
        <LineDefault/>
        <VerticalItem
          title={"Products"}
          icon={"fluent:box-16-filled"}
          route={"/products"}
          page={page === "/products"}
        />
        <LineDefault/>
        <VerticalItem
          title={"Sells"}
          icon={"ic:baseline-sell"}
          route={"/sells"}
          page={page === "/sells"}
        />
        <LineDefault/>
        <VerticalItem
          title={"Info"}
          icon={"entypo:info"}
          route={"/info"}
          page={page === "/info"}
        />
        <LineDefault/>
        <VerticalItem
          title={"Settings"}
          icon={"fa6-solid:gear"}
          route={"/settings"}
          page={page === "/settings"}
        />
        <LineDefault/>
      </div>

      <div className={styles.navigation_bar_foot}>
        <TextDefault text="All Rights Reserved © 2022"/>
        <TextDefault text=" Made by: @yurecouto"/>
      </div>
    </nav>
  )
};

export { NavigationBar };
