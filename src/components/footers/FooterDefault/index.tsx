import { Icon } from "@iconify/react";
import React, { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";
import { ButtonDefault } from "../../buttons/ButtonDefault";
import { IconButton } from "../../buttons/IconButton";
import { PaginationNumber } from "../../buttons/PaginationNumber";

import styles from "./styles.module.css";

interface InputProps {
  title?: string;
  handleAddItem?: (param: any) => void;
}

function FooterDefault({
  title,
  }: InputProps) {

  const theme = useSelector(selectTheme);

  const [hoverNext, setHoverNext] = useState<boolean>();
  const [hoverPrevious, setHoverPrevious] = useState<boolean>();

  const handleMouseInNext = () => {
    setHoverNext(true);
  };

  const handleMouseOutNext = () => {
    setHoverNext(false);
  };

  const handleMouseInPrevious = () => {
    setHoverPrevious(true);
  };

  const handleMouseOutPrevious = () => {
    setHoverPrevious(false);
  };

  const handlePrevious = async () => {
    // configurar alert
    // handlePreviousItem()
  }

  const handleNext = async () => {
    // configurar navigate
    // handleNextItem()
  }


  return (
    <div
      className={styles.footer_default_container}
    >
      <ButtonDefault
        width="20%"
        title={title}
      />
    </div>
  )
};

export { FooterDefault };
