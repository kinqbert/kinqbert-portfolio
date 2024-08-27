import Link from "next/link";
import Icon from "../Icon";

import "./HeadlineSection.scss";

export default function HeadlineSection() {
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

  return (
    <section className="headline-section">
      <div className="headline-section__socials">
        <Link
          href="https://github.com/kinqbert"
          className="headline-section__socials-link"
        >
          <Icon type="github" />
        </Link>
        <div className="headline-section__socials-separator"></div>
        <Link
          href="https://www.linkedin.com/in/maksym-perekhodko/"
          className="headline-section__socials-link"
        >
          <Icon type="linkedin" />
        </Link>
        <div className="headline-section__socials-separator"></div>
        <Link
          href="https://t.me/perekhodko_m"
          className="headline-section__socials-link"
        >
          <Icon type="telegram" />
        </Link>
      </div>
      <div className="headline-section__content">
        <h1 className="headline-section__title">Hello there</h1>
        <p className="headline-section__subtext">
          My name is Maksym Perekhodko,
          <br></br>
          I’m a <u>Full-stack developer</u>
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
}
