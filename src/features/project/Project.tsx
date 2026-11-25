import { useParams } from "react-router";
import styles from "./styles.module.css";
import Hero from "./sections/hero/Hero";
import { PROJECTS } from "../shared/data/projects";
import { Contact } from "../shared/components/contact";
import { Gallery } from "./sections/gallery/Gallery";
import Overview from "./sections/overview/Overview";

export function Project() {
  const { slug } = useParams();
  const project = PROJECTS.find((project) => project.slug === slug);
  if (!project) return null;

  return (
    <main className={styles.project}>
      <Hero project={project} />
      <Overview project={project} />
      <Gallery project={project} />
      {/*Add a section of related projects or similare projects here*/}
      <Contact />
    </main>
  );
}
