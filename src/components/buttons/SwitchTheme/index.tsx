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
          backgroundColor: theme.COLORS.ITEM_DEFAULT_HOVER,
        }}
      />


    </label>
  )
};

export { SwitchTheme };
