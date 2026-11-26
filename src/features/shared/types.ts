export type ProjectImage = {
  order: number;
  url: string;
  altText: string;
};

export type ProjectLink = {
  type: "live" | "repo";
  label: string;
  url: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  cardSize?: "large" | "wide" | "tall";
  url: string;
  altText: string;
  overview: string[];
  images: ProjectImage[];
  links: ProjectLink[];
};

export type Experience = {
  id: number;
  slug: string;
  title: string;
  organization: string;
  type: "education" | "work";
  from: number;
  to: number;
  highlights: string[];
  technologies: string[];
};
