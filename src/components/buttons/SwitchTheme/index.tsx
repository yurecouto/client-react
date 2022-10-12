import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setTheme, selectTheme } from "../../../providers/slices/theme.slice";

import light from "../../../themes/light";
import dark from "../../../themes/dark";

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
  }, [dispatch, nightMode]);

  return (
    <label className={styles.switch}>
      <input
        className={styles.switch_input}
        type="checkbox"
        checked={nightMode}
        onChange={(e) => setNightMode(!nightMode)}
      />
      <span className={styles.slider}></span>
    </label>
  )
};

export { SwitchTheme };
