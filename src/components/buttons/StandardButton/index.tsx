import { useState } from "react";
import styles from "./styles.module.css";

interface InputProps {
  title?: string;
  color?: string;
  hoverColor?: string;
  handleSomething?: (param: any) => void;
}

function StandardButton({
  title,
  color,
  hoverColor,
  handleSomething,
  }: InputProps) {
  const [hover, setHover] = useState<boolean>();

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <button
      className={styles.standard_button}
      onMouseOver={handleMouseIn}
      onMouseOut={handleMouseOut}
      onClick={handleSomething}
      style={{
        backgroundColor: hover ? hoverColor : color,
        color: "#fff",
    }} >

      {title}

    </button>
  )
};

export { StandardButton };
