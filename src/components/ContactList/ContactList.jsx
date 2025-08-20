import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList({ contacts, onDelete }) {
  return (
    <div>
      <ul className={css.contactsList}>
        {contacts.map((contact) => (
          <li key={contact.id} className={css.contactItem}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
