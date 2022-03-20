import styles from "./Skills.module.css";

export default function Skills({ worked, familiar }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Skills</div>
      <div className={styles.box}>
        <div className={styles.name}>Technologies I Worked With</div>
        <div className={styles.description}>
          {worked.map((tech) => `${tech}, `)}...
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.name}>Things that I'm familiar with</div>
        <div className={styles.description}>
          {familiar.map((tech) => `${tech}, `)}...
        </div>
      </div>
    </div>
  );
}
