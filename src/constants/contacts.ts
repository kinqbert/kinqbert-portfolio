import { Contact } from "@/types/Contacts";

import TelegramContactIcon from "@/assets/contact.icons/telegram-contact-icon.svg";
import CvContactIcon from "@/assets/contact.icons/cv-contact-icon.svg";
import LinkedInContactIcon from "@/assets/contact.icons/linked-in-contact-icon.svg";
import EmailContactIcon from "@/assets/contact.icons/email-contact-icon.svg";

export const contacts: Contact[] = [
  {
    title: "@perekhodko_m",
    subtitle: "Telegram",
    href: "https://t.me/perekhodko_m",
    imageSrc: TelegramContactIcon,
  },
  {
    title: "View my CV",
    subtitle: "CV",
    href: "https://drive.google.com/file/d/1LGtj7QosC5P_yXY0C7ZMM_M5yxTmknrq/view?usp=sharing",
    imageSrc: CvContactIcon,
  },
  {
    title: "Maksym Perekhodko",
    subtitle: "LinkedIn",
    href: "https://www.linkedin.com/in/maksym-perekhodko/",
    imageSrc: LinkedInContactIcon,
  },
  {
    title: "perekhodko.maksym@gmail.com",
    subtitle: "Email",
    href: "perekhodko.maksym@gmail.com",
    imageSrc: EmailContactIcon,
    isAbleToCopy: true,
  },
];
