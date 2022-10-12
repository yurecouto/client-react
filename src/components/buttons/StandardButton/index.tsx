import { useState } from "react";
import styles from "./styles.module.css";

interface InputProps {
  title?: string;
  handleSomething?: (param: any) => void;
}

function StandardButton({
  title,
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
            backgroundColor: hover ? "#333" : "#999",
            color: "#fff",
        }} >

          {title}

        </button>
  )
};

export { StandardButton };
