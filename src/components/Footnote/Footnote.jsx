import styles from "./Footnote.module.css";

export default function Footnote() {
  return (
    <div className={styles.container}>
      <a href="#" className={styles.link}>
        You can see this resume online !
      </a>
    </div>
  );
}
