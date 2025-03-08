import Link from "next/link";
import styles from "./HeadlineSection.module.scss";
import React from "react";
import { socials } from "@/constants/socials";
import Image from "next/image";

export const HeadlineSection = () => {
  const squaresAmount = 1600;
  const squaresArray = new Array(squaresAmount);
  squaresArray.fill(<></>);

  const tileColorClasses = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
  ];

  return (
    <section className={styles.headlineSection}>
      <ul className={styles.socials}>
        {socials.map((socialItem, index) => (
          <React.Fragment key={index}>
            {!!index && <div className={styles.socialsSeparator}></div>}
            <Link href={socialItem.href} className={styles.socialsLink}>
              <Image src={socialItem.iconSrc} alt="Social icon" />
            </Link>
          </React.Fragment>
        ))}
      </ul>
      <div className={styles.content}>
        <h1>Hello there</h1>
        <p className={styles.subtext}>
          My name is Maksym Perekhodko,
          <br></br>
          I&apos;m a <u>Full-stack engineer</u>.
        </p>
      </div>
      <div className={styles.background}>
        {squaresArray.map((_, index) => {
          const tileColorIndex = Math.round(
            Math.random() * (tileColorClasses.length - 1)
          );

          return (
            <div
              key={index}
              className={`${styles.backgroundTile} ${
                styles[`backgroundTile--${tileColorClasses[tileColorIndex]}`]
              }`}
            ></div>
          );
        })}
      </div>
    </section>
  );
};
