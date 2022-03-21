import styles from "./Skills.module.css";

export default function Skills({ skills }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Skills</div>
      {skills.map((skill) => (
        <div key={skill.title} className={styles.box}>
          <div className={styles.name}>{skill.title}</div>
          <div className={styles.description}>
            {skill.technology.map((tech) => `${tech}, `)}...
          </div>
        </div>
      ))}
    </div>
  );
}
