"use client";

import { isValidEmail } from "@/helpers/isEmail";

import styles from "./ContanctTitle.module.scss";
import Image from "next/image";

import CopyIcon from "@/assets/general-icons/copy-icon.svg";

interface Props {
  title: string;
  href: string;
}

export const ContactTitle = ({ title, href }: Props) => {
  const isEmail = isValidEmail(href);

  const onCopyClick = () => {
    navigator.clipboard.writeText(href);
  };

  return (
    <div className={styles.titleWrapper}>
      <span>{title}</span>
      {isEmail && (
        <button className={styles.copyButton} onClick={onCopyClick}>
          <Image
            className={styles.copyButtonIcon}
            src={CopyIcon}
            alt="Copy button"
          />
        </button>
      )}
    </div>
  );
};
