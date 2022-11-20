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
  itemName?: string;
  handleAddItem?: (param: any) => void;
}

function FooterDefault({
  title,
  itemName = "Something"
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
      <div className={styles.footer_default_pagination}>
        <IconButton
          icon="ph:arrow-square-left-fill"
        />

        <PaginationNumber
          page={"1"}
          fill={true}
        />
        <PaginationNumber
          page={"2"}
        />
        <PaginationNumber
          page={"3"}
        />

        <IconButton
          icon="ph:arrow-square-right-fill"
        />
      </div>

      <ButtonDefault
        width="20%"
        title={`Add ${itemName}`}
      />
    </div>
  )
};

export { FooterDefault };
