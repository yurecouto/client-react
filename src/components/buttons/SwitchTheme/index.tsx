import { useEffect, useState } from "react";

import styles from "./styles.module.css";

function SwitchTheme() {
  const [nightMode, setNightMode] = useState<boolean>(false);

  useEffect(() => {
    if (nightMode) {
      console.log("dark")
    } else {
      console.log("light")
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
