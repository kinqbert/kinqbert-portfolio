import { StaticImageData } from "next/image";

export interface Contact {
  title: string;
  subtitle: string;
  href: string;
  imageSrc: StaticImageData;
}
