import { useParams, Navigate } from "react-router";
import { Contact } from "../../features/components/contact";
import { Hero } from "../../features/project/hero/Hero";
import { projects } from "../../features/project";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);
  // Guard against invalid URLs
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main>
      {/* 1. Hero: Title, 1-sentence hook, Primary CTA (Live App / GitHub), Role & Tech Tags */}
      <Hero project={project} />
      {/* 2. Primary Visual / Interactive Preview or Gallery */}

      {/* 3. Context & Overview: The problem, goal, and your specific contributions */}

      {/* 4. Top 3 Technical Highlights / Key Engineering Decisions */}

      {/* 5. Bottom CTA: Repeat Live/Repo links + "Next Project" navigation */}

      <Contact />
    </main>
  );
}

export default ProjectPage;
