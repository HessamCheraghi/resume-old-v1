import styles from "./Education.module.css";

export default function Education({ education }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Education</h2>
      {education.map((edu) => (
        <article key={edu.major} className={styles.box}>
          <time className={styles.duration}>{edu.duration}</time>
          <h3 className={styles.major}>{edu.major}</h3>
          <p className={styles.place}>{edu.place}</p>
        </article>
      ))}
    </section>
  );
}
