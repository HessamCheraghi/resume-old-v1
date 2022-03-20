import styles from "./Summary.module.css";

export default function Summary({ fullName, jobTitle }) {
  return (
    <div className={styles.container}>
      <div className={styles.fullName}>{fullName}</div>
      <div className={styles.jobTitle}>{jobTitle}</div>
    </div>
  );
}
