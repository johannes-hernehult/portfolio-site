export default function Overview({ project }) {
  const paragraphs = project.overview.map((paragraph) => (
    <p key={paragraph.slice(0, 20)}>{paragraph}</p>
  ));

  return (
    <section>
      <h2>Overview</h2>
      {paragraphs}
    </section>
  );
}
