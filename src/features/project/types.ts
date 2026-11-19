export type Discipline = 'engineering' | '3d';

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
