export type ExperienceCategory = "work" | "education" | "project";
export type ExperienceDiscipline = "engineering" | "3d" | "other";

/** Describes a work, education, or project entry shown on the experience timeline. */
export interface Experience {
  id: string;
  category: ExperienceCategory;
  discipline: ExperienceDiscipline;
  title: string;
  organization: string;
  organizationUrl?: string;
  location: string;
  startDate: string; // Format: "YYYY-MM"
  endDate: string | null; // Format: "YYYY-MM" or null for "Present"
  relevanceOrder: number; // Lower numbers surface first in relevance sort
  highlights: string[];
  tags: string[];
}
