import { Card } from "../../components/card";
import { Grid } from "../../components/grid";
import type { Experience } from "../types";
import styles from "./styles.module.css";

interface ExperiencesProps {
  experiences: Experience[];
}

function formatDate(date: string | null): string {
  if (!date) return "Present";

  const [year, month] = date.split("-");
  const parsed = new Date(Number(year), Number(month) - 1);

  return parsed.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function Experiences({ experiences }: ExperiencesProps) {
  if (experiences.length === 0) return null;

  const sortedExperiences = [...experiences].sort(
    (a, b) => a.relevanceOrder - b.relevanceOrder,
  );

  return (
    <section className={styles.experiences}>
      <h2>Experiences</h2>
      <Grid>
        {sortedExperiences.map((experience) => (
          <Card key={experience.id}>
            <header className={styles.header}>
              <div className={styles.titleGroup}>
                <h3>{experience.title}</h3>
                <p className={styles.organization}>
                  {experience.organization} · {experience.location}
                </p>
              </div>

              <div className={styles.meta}>
                <span className={styles.period}>
                  <time dateTime={experience.startDate}>
                    {formatDate(experience.startDate)}
                  </time>
                  {" – "}
                  {experience.endDate ? (
                    <time dateTime={experience.endDate}>
                      {formatDate(experience.endDate)}
                    </time>
                  ) : (
                    <span>Present</span>
                  )}
                </span>

                <div className={styles.badges}>
                  <span className={styles.badge}>{experience.category}</span>
                  <span className={styles.badge}>{experience.discipline}</span>
                </div>
              </div>
            </header>

            {experience.highlights.length > 0 && (
              <ul className={styles.highlights}>
                {experience.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            )}

            {experience.tags.length > 0 && (
              <ul className={styles.tags} aria-label="Technologies and skills">
                {experience.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </Grid>
    </section>
  );
}
