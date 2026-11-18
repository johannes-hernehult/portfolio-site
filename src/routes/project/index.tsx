import { Link, useParams } from "react-router";

function ProjectPage() {
  const { slug } = useParams();
  const title = slug
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main>
      <Link to="/">Back to home</Link>
      <h1>{title ?? "Project"}</h1>
      <p>Project details will go here.</p>
    </main>
  );
}

export default ProjectPage;
