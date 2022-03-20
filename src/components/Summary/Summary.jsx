import styles from "./Summary.module.css";

export default function Summary() {
  return (
    <div className={styles.container}>
      <div className={styles.fullName}>Hessam A. Cheraghi</div>
      <div className={styles.jobTitle}>Junior Front-end Developer</div>
    </div>
  );
}
