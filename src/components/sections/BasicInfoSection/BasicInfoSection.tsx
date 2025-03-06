"use client";

import { getTimeStringFromMilliseconds } from "@/utils/getTimeStringFromMilliseconds";
import "./BasicInfoSection.scss";

export const BasicInfoSection = () => {
  const currentDate = new Date();
  const startDate = new Date("2024-08-27T00:00:00+03:00");
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
    <section className="basic-info-section">
      <div className="basic-info-section__content">
        {infoItems.map((infoItem, index) => (
          <div className="basic-info-section__info-item" key={index}>
            <span className="basic-info-section__info-item-title">
              {infoItem.title}
            </span>
            <span className="basic-info-section__info-item-value">
              {infoItem.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
