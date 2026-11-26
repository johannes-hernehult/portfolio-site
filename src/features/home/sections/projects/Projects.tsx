import { Link } from "react-router";
import styles from "./styles.module.css";
import { PROJECTS } from "../../../shared/data/projects";
import { PROJECT_RETURN_SCROLL_KEY } from "../../../shared/hooks/useScrollToRef";

export default function Projects() {
  const projectItems = PROJECTS.map((project) => (
    <li
      key={project.id}
      className={`${styles.card} ${styles[project.cardSize] || ""}`}
      style={{ backgroundImage: `url(${project.url})` }}
    >
      <Link
        to={`/project/${project.slug}`}
        state={{ fromHome: true }}
        onClick={(event) => {
          if (
            event.button === 0 &&
            !event.metaKey &&
            !event.ctrlKey &&
            !event.shiftKey &&
            !event.altKey
          ) {
            sessionStorage.setItem(
              PROJECT_RETURN_SCROLL_KEY,
              String(window.scrollY),
            );
          }
        }}
        className={styles.link}
      >
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
