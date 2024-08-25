import "./HeadlineSection.scss";

export default function HeadlineSection() {
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
      <div className="headline-section__content">
        <h1>Hello there</h1>
      </div>
      <div className="headline-section__background">
        {squaresArray.map((_, index) => {
          const tileColorIndex = Math.round(
            Math.random() * tileColorClasses.length
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
