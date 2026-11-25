import { Link } from "react-router";
import styles from "./styles.module.css";
import { PROJECTS } from "../../../shared/data/projects";


export default function Projects() {
  const projectItems = PROJECTS.map((project) => (
    <li
      key={project.id}
      className={`${styles.card} ${styles[project.size] || ""}`}
      style={{ backgroundImage: `url(${project.url})` }}
    >
      <Link to={`/project/${project.slug}`} className={styles.link}>
        <h3>{project.title}</h3>
      </Link>
    </li>
  ));

  return (
    <section id="projects" className={styles.projects}>
      <h2>Selected Work</h2>
      <ul className={styles.list}>{projectItems}</ul>
    </section>
  );
}
