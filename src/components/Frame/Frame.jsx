import styles from "./Frame.module.css";

export default function Frame({ children }) {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.contentArea}>{children}</div>
      </div>
    </div>
  );
}
