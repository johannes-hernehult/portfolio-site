import { Card } from "../../components/card";
import { Grid } from "../../components/grid";
import type { Experience } from "../types";
import styles from "./styles.module.css";

interface ExperiencesProps {
  experiences: Experience[];
}

/** Displays experience entries ordered by their relevance rank. */
export function Experiences({ experiences }: ExperiencesProps) {
  if (experiences.length === 0) return null;

  const sortedExperiences = [...experiences].sort(
    (a, b) => a.relevanceOrder - b.relevanceOrder,
  );

  return (
    <section className={styles.experiences} id="experiences">
      <h2>Experiences</h2>
      <Grid>
        {sortedExperiences.map((experience) => (
          <Card key={experience.id}>
            <h3>{experience.title}</h3>
            <p className={styles.organization}>
              {experience.organization} · {experience.location}
            </p>
          </Card>
        ))}
      </Grid>
    </section>
  );
}
