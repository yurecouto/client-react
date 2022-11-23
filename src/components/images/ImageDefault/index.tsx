import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

import styles from "./styles.module.css";

interface ImageProps {
  uri?: string;
  height?: string;
}

function ImageDefault({
  uri = "",
  height
}: ImageProps) {
  const theme = useSelector(selectTheme);

  return (
    <div>
      <img
        className={styles.image_container}
        src={uri}
        style={{ height: `${height}vh` }}
      />
    </div>
  )
};

export { ImageDefault };
