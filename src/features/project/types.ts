export type Discipline = 'engineering' | '3d';

/** Describes a project image and its position in the project gallery. */
export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  order: number;
}

export interface ProjectLesson {
  title: string;
  detail: string;
}

export interface ProjectLinks {
  live?: string;
  repo?: string;
  video?: string;
}

/** Holds the content and links used to render a project detail page. */
export interface Project {
  id: string;
  slug: string;
  title: string;
  discipline: Discipline;
  year: number;
  role: string;
  featured: boolean;
  summary: string;
  overview: string[];
  lessons: ProjectLesson[];
  images: ProjectImage[];
  tags: string[];
  links: ProjectLinks;
}
