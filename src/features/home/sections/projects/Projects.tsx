import { Link } from "react-router";
import styles from "./styles.module.css";
const PROJECTS = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with React and CSS Modules.",
    url: "https://placehold.co/800x500/1e293b/ffffff?text=Portfolio",
    altText: "Screenshot of the Portfolio Website",
    size: "large", // Spans 8 columns, 2 rows
  },
  {
    id: 2,
    slug: "csharp-console-app",
    title: "C# Console Inventory App",
    description: "Command-line inventory system with file persistence.",
    url: "https://placehold.co/400x400/1e293b/ffffff?text=C%23+App",
    altText: "Terminal window running C# app",
    size: "default", // Spans 4 columns, 1 row
  },
  {
    id: 3,
    slug: "interactive-cv",
    title: "Interactive CV Website",
    description: "Printable digital resume with dark mode.",
    url: "https://placehold.co/400x400/1e293b/ffffff?text=CV+Website",
    altText: "Preview of CV Website",
    size: "default",
  },
  {
    id: 4,
    slug: "weather-dashboard",
    title: "Weather Forecast Dashboard",
    description: "Real-time 5-day forecasts via OpenWeather API.",
    url: "https://placehold.co/600x400/1e293b/ffffff?text=Weather+App",
    altText: "Weather Dashboard forecast",
    size: "wide", // Spans 6 columns
  },
  {
    id: 5,
    slug: "task-tracker",
    title: "Kanban Task Tracker",
    description: "Drag-and-drop task board with local storage.",
    url: "https://placehold.co/600x400/1e293b/ffffff?text=Task+Tracker",
    altText: "Kanban board columns",
    size: "wide", // Spans 6 columns
  },
];

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
