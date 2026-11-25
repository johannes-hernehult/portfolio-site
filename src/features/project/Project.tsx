import { useParams } from "react-router";
import styles from "./styles.module.css";

export function Project() {
  const { slug } = useParams();

  return (
    <main className={styles.project}>
      <h1>Project {slug}</h1>
    </main>
  );
}
