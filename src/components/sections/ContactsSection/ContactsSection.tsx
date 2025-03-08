import { contacts } from "@/constants/contacts";
import styles from "./ContactsSection.module.scss";
import { ContactItem } from "@/components/common/ContactItem";

export const ContactsSection = () => {
  return (
    <section className={styles.contactsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contacts</h2>
        <p className={styles.subtitle}>
          Feel free to contact me via any comfortable way of communication.
        </p>
        <ul className={styles.contactsList}>
          {contacts.map((contact) => (
            <ContactItem contact={contact} key={contact.href} />
          ))}
        </ul>
      </div>
    </section>
  );
};
