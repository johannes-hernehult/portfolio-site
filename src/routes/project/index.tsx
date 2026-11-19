import { useParams, Navigate } from "react-router";
import { Contact } from "../../features/components/contact";
import {
  Gallery,
  Hero,
  Highlights,
  Overview,
  ProjectCta,
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
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main>
      {/* 1. Hero: Title, 1-sentence hook, Primary CTA (Live App / GitHub), Role & Tech Tags */}
      <Hero project={project} />

      {/* 2. Primary Visual / Interactive Preview or Gallery */}
      <Gallery project={project} />

      {/* 3. Context & Overview: The problem, goal, and your specific contributions */}
      <Overview project={project} />

      {/* 4. Top 3 Technical Highlights / Key Engineering Decisions */}
      <Highlights project={project} />

      {/* 5. Bottom CTA: Repeat Live/Repo links + "Next Project" navigation */}
      <ProjectCta project={project} projects={projects} />

      <Contact />
    </main>
  );
}

export default ProjectPage;
