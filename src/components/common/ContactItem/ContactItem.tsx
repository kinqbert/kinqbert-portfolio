import Image from "next/image";
import Link from "next/link";

import { Contact } from "@/types/Contacts";

import { ContactTitle } from "./ContactTitle";

import { isValidEmail } from "@/helpers/isEmail";

import LinkArrowIcon from "@/assets/general-icons/link-arrow-icon.svg";

import styles from "./ContactItem.module.scss";

interface Props {
  contact: Contact;
}

export const ContactItem = ({ contact }: Props) => {
  const isMail = isValidEmail(contact.href);

  const Wrapper: React.ElementType = isMail ? "div" : Link;
  const wrapperProps = isMail
    ? {}
    : { href: contact.href, passHref: true, target: "_blank" };

  return (
    <Wrapper className={styles.contactItem} {...wrapperProps}>
      <div className={styles.imageWrapper}>
        <Image src={contact.imageSrc} alt={contact.title} />
      </div>
      <div className={styles.textWrapper}>
        <span className={styles.subtitle}>{contact.subtitle}</span>
        <ContactTitle title={contact.title} href={contact.href} />
      </div>
      {isMail && (
        <Image
          src={LinkArrowIcon}
          className={styles.diagonalArrow}
          alt="Link arrow"
        />
      )}
    </Wrapper>
  );
};
