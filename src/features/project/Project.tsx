import { useParams } from "react-router";

export default function Project() {
  const { slug } = useParams();

  return (
    <main className="project">
      <h1>Project {slug}</h1>;
    </main>
  );
}
