"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import CopyIcon from "@/assets/general-icons/copy-icon.svg";
import TickIcon from "@/assets/general-icons/tick-icon.svg";

import { isValidEmail } from "@/helpers/isEmail";

import styles from "./ContactTitle.module.scss";
interface Props {
  title: string;
  href: string;
}

export const ContactTitle = ({ title, href }: Props) => {
  const isEmail = isValidEmail(href);

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setIsClicked(false);
      }, 4000);
    }
  }, [isClicked]);

  const onCopyClick = () => {
    navigator.clipboard.writeText(href);
    setIsClicked(true);
  };

  const imageSrc = isClicked ? TickIcon : CopyIcon;

  return (
    <div className={styles.titleWrapper}>
      <span>{title}</span>
      {isEmail && (
        <button className={styles.copyButton} onClick={onCopyClick}>
          <Image
            className={styles.copyButtonIcon}
            src={imageSrc}
            alt="Copy button"
          />
        </button>
      )}
    </div>
  );
};
