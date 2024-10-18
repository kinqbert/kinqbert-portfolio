import Image from "next/image";
import githubIcon from "@/assets/social-icons/github-icon.svg";
import linkedinIcon from "@/assets/social-icons/linkedin-icon.svg";
import telegramIcon from "@/assets/social-icons/telegram-icon.svg";
import { IconType } from "@/types/IconType";

interface Props {
  type: IconType;
}

export default function Icon({ type }: Props) {
  switch (type) {
    case "github":
      return <Image src={githubIcon} alt="GitHub Icon" />;
    case "linkedin":
      return <Image src={linkedinIcon} alt="LinkedIn Icon" />;
    case "telegram":
      return <Image src={telegramIcon} alt="Telegram Icon" />;
    default:
      return null;
  }
}
