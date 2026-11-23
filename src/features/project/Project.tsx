import { useParams } from "react-router";

export default function Project() {
  const { slug } = useParams();

  return <h1>Project {slug}</h1>;
}
