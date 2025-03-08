import { Social } from "@/types/Socials";

import TelegramSocialIcon from "@/assets/social-icons/telegram-icon.svg";
import LinkedinSocialIcon from "@/assets/social-icons/linkedin-icon.svg";
import GithubSocialIcon from "@/assets/social-icons/github-icon.svg";

export const socials: Social[] = [
  { iconSrc: GithubSocialIcon, href: "https://github.com/kinqbert" },
  {
    iconSrc: LinkedinSocialIcon,
    href: "https://www.linkedin.com/in/maksym-perekhodko/",
  },
  { iconSrc: TelegramSocialIcon, href: "https://t.me/perekhodko_m" },
];
