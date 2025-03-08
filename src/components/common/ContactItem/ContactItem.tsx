import { Contact } from "@/types/Contacts";

import styles from "./ContactItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ContactTitle } from "./ContactTitle";
import { isValidEmail } from "@/helpers/isEmail";

interface Props {
  contact: Contact;
}

export const ContactItem = ({ contact }: Props) => {
  const isMail = isValidEmail(contact.href);

  const Wrapper: React.ElementType = isMail ? "div" : Link;
  const wrapperProps = isMail ? {} : { href: contact.href, passHref: true };

  return (
    <Wrapper className={styles.contactItem} {...wrapperProps}>
      <div className={styles.imageWrapper}>
        <Image src={contact.imageSrc} alt={contact.title} />
      </div>
      <div className={styles.textWrapper}>
        <span className={styles.subtitle}>{contact.subtitle}</span>
        <ContactTitle title={contact.title} href={contact.href} />
      </div>
    </Wrapper>
  );
};
