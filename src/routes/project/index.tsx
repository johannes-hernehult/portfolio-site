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

/** Renders the project matching the current route slug. */
function ProjectPage() {
  const { slug } = useParams();

  const currentIndex = projects.findIndex((project) => project.slug === slug);

  // Redirect unknown slugs so they never render an empty project detail page.
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
      <Contact />
      <MoreProjects project={project} projects={projects} />
    </main>
  );
}

export default ProjectPage;
