import styles from "./Contact.module.css";

export default function Contact({ contact }) {
  return (
    <ul className={styles.container}>
      {contact.map((info) => (
        <li key={info.type} className={styles.list}>
          {info.type}
          {": "}
          <a href={info.link} className={styles.link}>
            {info.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
