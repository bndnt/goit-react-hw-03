import css from "./Contact.module.css";
export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type="submit" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
