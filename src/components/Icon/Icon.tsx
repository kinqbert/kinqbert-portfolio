import Image from "next/image";
import githubIcon from "../../assets/icons/github-icon.svg";
import linkedinIcon from "../../assets/icons/linkedin-icon.svg";
import telegramIcon from "../../assets/icons/telegram-icon.svg";

interface Props {
  type: "github" | "linkedin" | "telegram";
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
