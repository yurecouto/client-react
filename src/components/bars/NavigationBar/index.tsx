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
          route={"/admin/home"}
          page={page === "/admin/home"}
        />
        <LineDefault/>
        <VerticalItem
          title={"Users"}
          icon={"bxs:user"}
          route={"/admin/users"}
          page={page === "/admin/users"}
        />
        <LineDefault/>
        <VerticalItem
          title={"Products"}
          icon={"fluent:box-16-filled"}
          route={"/admin/products"}
          page={page === "/admin/products"}
        />
        <LineDefault/>
        <VerticalItem
          title={"Sells"}
          icon={"ic:baseline-sell"}
          route={"/admin/sells"}
          page={page === "/admin/sells"}
        />
        <LineDefault/>
        <VerticalItem
          title={"Info"}
          icon={"entypo:info"}
          route={"/admin/info"}
          page={page === "/admin/info"}
        />
        <LineDefault/>
        <VerticalItem
          title={"Settings"}
          icon={"fa6-solid:gear"}
          route={"/admin/settings"}
          page={page === "/admin/settings"}
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
