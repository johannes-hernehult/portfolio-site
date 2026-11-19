import { Link } from "react-router";
import { projects } from "../../project/MockData";

export function Projects() {
  return (
    <section>
      <h2>My projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/project/${project.slug}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
