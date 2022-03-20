import Box from "./Box";
import styles from "./WorkExperience.module.css";

export default function WorkExperience({ projects }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Work Experience</div>
      <div className={styles.columnCard}>
        {projects.map((project) => (
          <Box key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
