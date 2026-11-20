import { useParams, Navigate } from "react-router";
import { Contact } from "../../features/components/contact";
import {
  Gallery,
  Hero,
  Highlights,
  MoreProjects,
  Overview,
  projects,
} from "../../features/project";

function ProjectPage() {
  const { slug } = useParams();

  const currentIndex = projects.findIndex((project) => project.slug === slug);

  // Guard against invalid URLs
  if (currentIndex === -1) {
    return <Navigate to="/404" replace />;
  }

  const project = projects[currentIndex];

  return (
    <main>
      <Hero project={project} />
      <Gallery project={project} />
      <Overview project={project} />
      <Highlights project={project} />
      <MoreProjects project={project} projects={projects} />
      <Contact />
    </main>
  );
}

export default ProjectPage;
