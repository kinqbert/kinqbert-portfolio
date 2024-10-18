import { Technology } from "@/types/Technology";

import "./TechnologyItem.scss";
import Image from "next/image";

interface Props {
  technology: Technology;
}

export const TechnologyItem = ({ technology }: Props) => {
  return (
    <div className="technology-item">
      <Image
        className="technology-item__image"
        src={technology.imageSrc}
        alt="Technology item icon"
      />
      <span className="technology-item__title">{technology.title}</span>
    </div>
  );
};
