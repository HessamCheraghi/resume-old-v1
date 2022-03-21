import styles from "./Summary.module.css";

export default function Summary({ fullName, jobTitle }) {
  return (
    <header className={styles.container}>
      <h1 className={styles.fullName}>{fullName}</h1>
      <p className={styles.jobTitle}>{jobTitle}</p>
    </header>
  );
}
