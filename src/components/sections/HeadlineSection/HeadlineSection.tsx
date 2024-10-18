import Link from "next/link";
import Icon from "@/components/Icon";

import "./HeadlineSection.scss";
import { IconType } from "@/types/IconType";
import React from "react";

export const HeadlineSection = () => {
  // TODO -- add useEffect for tiles
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

  const socials: { iconType: IconType; href: string }[] = [
    { iconType: "github", href: "https://github.com/kinqbert" },
    {
      iconType: "linkedin",
      href: "https://www.linkedin.com/in/maksym-perekhodko/",
    },
    { iconType: "telegram", href: "https://t.me/perekhodko_m" },
  ];

  return (
    <section className="headline-section">
      <div className="headline-section__socials">
        {socials.map((socialItem, index) => (
          <React.Fragment key={index}>
            {!!index && (
              <div className="headline-section__socials-separator"></div>
            )}
            <Link
              href={socialItem.href}
              className="headline-section__socials-link"
            >
              <Icon type={socialItem.iconType} />
            </Link>
          </React.Fragment>
        ))}
      </div>
      <div className="headline-section__content">
        <h1 className="headline-section__title">Hello there</h1>
        <p className="headline-section__subtext">
          My name is Maksym Perekhodko,
          <br></br>
          I’m a <u>Full-stack engineer</u>.
        </p>
      </div>
      <div className="headline-section__background">
        {squaresArray.map((_, index) => {
          const tileColorIndex = Math.round(
            Math.random() * (tileColorClasses.length - 1)
          );

          return (
            <div
              key={index}
              className={`headline-section__background-tile headline-section__background-tile--${tileColorClasses[tileColorIndex]}`}
            ></div>
          );
        })}
      </div>
    </section>
  );
};
