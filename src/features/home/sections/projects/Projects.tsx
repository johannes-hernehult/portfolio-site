import { Link } from "react-router";
import styles from "./styles.module.css";
import { PROJECTS } from "../../../shared/data/projects";
import {
  PROJECT_LINK_STATE,
  useRememberHomeScroll,
} from "../../../shared/hooks/useScrollOnNavigate";

export function Projects() {
  const rememberHomeScroll = useRememberHomeScroll();
  const projectItems = PROJECTS.map((project) => (
    <li
      key={project.id}
      className={`${styles.card} ${project.cardSize ? styles[project.cardSize] : ""}`}
    >
      <img src={project.url} alt="" loading="lazy" decoding="async" />
      <Link
        to={`/project/${project.slug}`}
        state={PROJECT_LINK_STATE}
        onClick={rememberHomeScroll}
        className={styles.link}
      >
        <h3>{project.title}</h3>
      </Link>
    </li>
  ));

  return (
    <section id="projects" className="content-section">
      <h2>Projects</h2>
      <ul className={styles.list}>{projectItems}</ul>
    </section>
  );
}
