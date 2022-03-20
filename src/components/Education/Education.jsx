import styles from "./Education.module.css";

export default function Education({ education }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Education</div>
      {education.map((edu) => (
        <div key={edu.major} className={styles.box}>
          <div className={styles.duration}>{edu.duration}</div>
          <div className={styles.major}>{edu.major}</div>
          <div className={styles.place}>{edu.place}</div>
        </div>
      ))}
    </div>
  );
}
