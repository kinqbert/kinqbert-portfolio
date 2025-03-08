import { Contact } from "@/types/Contacts";

import styles from "./ContactItem.module.scss";
import Image from "next/image";
import Link from "next/link";

interface Props {
  contact: Contact;
}

export const ContactItem = ({ contact }: Props) => {
  return (
    <Link className={styles.contactItem} href={contact.href}>
      <div className={styles.imageWrapper}>
        <Image src={contact.imageSrc} alt={contact.title} />
      </div>
      <div className={styles.textWrapper}>
        <span className={styles.subtitle}>{contact.subtitle}</span>
        <span>{contact.title}</span>
      </div>
    </Link>
  );
};
