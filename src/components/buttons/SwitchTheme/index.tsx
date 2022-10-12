import { useEffect, useState } from "react";

import styles from "./styles.module.css";

import light from "../../../themes/light.theme";
import dark from "../../../themes/dark.theme";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "../../../providers/slices/theme.slice";

function SwitchTheme() {
  const [nightMode, setNightMode] = useState<boolean>(false);

  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (nightMode) {
      dispatch(setTheme(dark))
    } else {
      dispatch(setTheme(light))
    }
  }, [dispatch, nightMode]);

  console.log(theme.COLORS.LOGIN_BOX)

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
