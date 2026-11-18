import { Link } from "react-router";

export default function LandingPage() {
  const testProjects = [
    {
      title: "Project 1",
      slug: "project-1",
    },

    {
      title: "Project 2",
      slug: "project-2",
    },

    {
      title: "Project 3",
      slug: "project-3",
    },
  ];

  return (
    <main>
      {testProjects.length &&
        testProjects.map((project) => (
          <p>
            <Link to={"/project/" + project.slug}>{project.title}</Link>
          </p>
        ))}
    </main>
  );
}
