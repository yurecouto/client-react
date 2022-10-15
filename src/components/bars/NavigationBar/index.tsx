import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";
import { SubtitleDefault } from "../../titles/SubtitleDefault";
import { TitleDefault } from "../../titles/TitleDefault";
import { VerticalItem } from "../../containers/VerticalItem"

import styles from "./styles.module.css";
import { LineDefault } from "../../others/LineDefault";

function NavigationBar() {
  const theme = useSelector(selectTheme);

  return (
    <nav
      className={styles.navigation_bar}
      style={{backgroundColor: theme.COLORS.CONTAINER_DEFAULT}}
    >

      <TitleDefault title={"Client"}/>
      <SubtitleDefault subtitle={"Administration"}/>

      <VerticalItem
        title={"Home"}
        route={"/admin/home"}
      />
      <LineDefault/>
      <VerticalItem
        title={"Users"}
      />
      <LineDefault/>
      <VerticalItem
        title={"Products"}
      />
      <LineDefault/>
      <VerticalItem
        title={"Sells"}
      />
      <LineDefault/>
      <VerticalItem
        title={"Info"}
      />
      <LineDefault/>
      <VerticalItem
        title={"Settings"}
      />
    </nav>
  )
};

export { NavigationBar };
