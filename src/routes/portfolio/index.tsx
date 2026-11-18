import { Link } from "react-router";

export default function Portfolio() {
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
    <>
      {testProjects.length &&
        testProjects.map((project) => (
          <Link to={"/project/" + project.slug}>{project.title}</Link>
        ))}
    </>
  );
}
