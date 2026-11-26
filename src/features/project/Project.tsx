import { useParams } from "react-router";
import { ProjectHero } from "./sections/hero/ProjectHero";
import { PROJECTS } from "../shared/data/projects";
import { Contact } from "../shared/components/contact";
import { NotFound } from "../shared/components/not-found";
import { Gallery } from "./sections/gallery/Gallery";
import { Overview } from "./sections/overview/Overview";

export function Project() {
  const { slug } = useParams();
  const project = PROJECTS.find((project) => project.slug === slug);
  if (!project) return <NotFound />;

  return (
    <main>
      <ProjectHero project={project} />
      <Overview project={project} />
      <Gallery project={project} />
      {/*Add a section of related projects or similare projects here*/}
      <Contact />
    </main>
  );
}
