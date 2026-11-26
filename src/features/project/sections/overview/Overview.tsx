import type { Project } from "../../../shared/types";

type OverviewProps = {
  project: Project;
};

export function Overview({ project }: OverviewProps) {
  const paragraphs = project.overview.map((paragraph) => (
    <p key={paragraph}>{paragraph}</p>
  ));

  return (
    <section className="content-section">
      <h2>Overview</h2>
      {paragraphs}
    </section>
  );
}
