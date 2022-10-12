import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setTheme, selectTheme } from "../../../providers/slices/theme.slice";

import light from "../../../themes/light.theme";
import dark from "../../../themes/dark.theme";

import styles from "./styles.module.css";

function SwitchTheme() {
  const dispatch = useDispatch();
  useSelector(selectTheme)

  const [nightMode, setNightMode] = useState<boolean>(false);

  useEffect(() => {
    if (nightMode) {
      dispatch(setTheme(dark))
    } else {
      dispatch(setTheme(light))
    }
  }, [nightMode]);

  return (
    <label className={styles.switch}>
      <input
        className={styles.switch_input}
        type="checkbox"
        checked={nightMode}
        onChange={(e) => setNightMode(!nightMode)}
      />
      <span
        className={styles.slider}
        style={{
          backgroundColor: nightMode ? "#E53935" : "#0A6ED1",
        }}
      />


    </label>
  )
};

export { SwitchTheme };
