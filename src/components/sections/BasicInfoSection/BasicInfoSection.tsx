"use client";

import { startDateString } from "@/constants/general";

import { getTimeStringFromMilliseconds } from "@/utils/getTimeStringFromMilliseconds";

import styles from "./BasicInfoSection.module.scss";

export const BasicInfoSection = () => {
  const currentDate = new Date();
  const startDate = new Date(startDateString);
  const experienceTimeInMilliseconds =
    currentDate.getTime() - startDate.getTime();
  const experienceString = getTimeStringFromMilliseconds(
    experienceTimeInMilliseconds
  );

  const infoItems: { title: string; value: string }[] = [
    {
      title: "Position",
      value: "Full-stack engineer",
    },
    {
      title: "Personal projects amount",
      value: "3",
    },
    {
      title: "Commercial experience",
      value: experienceString,
    },
    {
      title: "Primary technologies",
      value: "React / Next.js / Node.js",
    },
  ];

  return (
    <section className={styles.basicInfoSection}>
      <ul className={styles.content}>
        {infoItems.map((infoItem, index) => (
          <li className={styles.infoItem} key={index}>
            <span className={styles.infoItemTitle}>{infoItem.title}</span>
            <span className={styles.infoItemValue}>{infoItem.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
