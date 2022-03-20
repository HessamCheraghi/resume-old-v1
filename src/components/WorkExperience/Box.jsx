import styles from "./Box.module.css";
import OpenOutline from "./OpenOutline";
export default function Box({ project }) {
  return (
    <div className={styles.box}>
      <div className={styles.name}>{project.name}</div>

      <div className={styles.summary}>{project.summary}</div>

      <ul className={styles.stack}>
        {project.stack.map((tech) => (
          <li key={tech} className={styles.tech}>
            {tech}
          </li>
        ))}
      </ul>

      <a
        href={project.link}
        target="_blank"
        className={styles.link}
        title="Open in New Tab"
        rel="noopener noreferrer"
      >
        To See The Project Click Here
        <OpenOutline />
      </a>
    </div>
  );
}
