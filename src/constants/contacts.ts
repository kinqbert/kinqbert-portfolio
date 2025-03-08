import { Contact } from "@/types/Contacts";

import TelegramContactIcon from "@/assets/contact.icons/telegram-contact-icon.svg";
import CvContactIcon from "@/assets/contact.icons/cv-contact-icon.svg";
import LinkedInContactIcon from "@/assets/contact.icons/linked-in-contact-icon.svg";
import EmailContactIcon from "@/assets/contact.icons/email-contact-icon.svg";

export const contacts: Contact[] = [
  {
    title: "@perekhodko_m",
    subtitle: "Telegram",
    href: "https://www.youtube.com/",
    imageSrc: TelegramContactIcon,
  },
  {
    title: "View my CV",
    subtitle: "CV",
    href: "https://drive.google.com/file/d/1LGtj7QosC5P_yXY0C7ZMM_M5yxTmknrq/view?usp=sharing",
    imageSrc: CvContactIcon,
  },
  {
    title: "/maksym-perekhodko",
    subtitle: "LinkedIn",
    href: "https://www.linkedin.com/in/maksym-perekhodko/",
    imageSrc: LinkedInContactIcon,
  },
  {
    title: "perekhodko.maksym@gmail.com",
    subtitle: "Email",
    href: "https://www.youtube.com/",
    imageSrc: EmailContactIcon,
  },
];
