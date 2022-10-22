import { useEffect, useState } from "react";

import styles from "./styles.module.css";

import light from "../../../themes/light.theme";
import dark from "../../../themes/dark.theme";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "../../../providers/slices/theme.slice";

function SwitchTheme() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const localTheme = localStorage.getItem("theme")
  const [nightMode, setNightMode] = useState<boolean>(localTheme === "dark");

  function handleChangeTheme() {
    if (localTheme === "light") {
      setNightMode(true)
    } else {
      setNightMode(false)
    }
  }

  useEffect(() => {
    if (nightMode) {
      dispatch(setTheme(dark))
      localStorage.setItem("theme", "dark")
    } else {
      dispatch(setTheme(light))
      localStorage.setItem("theme", "light")
    }
  }, [dispatch, nightMode])

  return (
    <label className={styles.switch}>
      <input
        className={styles.switch_input}
        type="checkbox"
        checked={nightMode}
        onChange={handleChangeTheme}
      />
      <span
        className={styles.slider}
        style={{
          backgroundColor: theme.COLORS.ITEM_DEFAULT,
        }}
      />
    </label>
  )
};

export { SwitchTheme };
