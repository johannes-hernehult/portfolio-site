export const EXPERIENCES = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with React and CSS Modules.",
    type: "work",
    from: 2024,
    to: "Present",
    highlights: [
      "Engineered a responsive 12-column CSS Grid layout with dynamic card spans",
      "Implemented client-side routing with dedicated project case-study views",
      "Scoped component styles with CSS Modules and custom theme variables",
    ],
    technologies: ["React", "React Router", "CSS Modules", "Vite"],
  },
  {
    id: 2,
    slug: "csharp-console-app",
    title: "C# Console Inventory App",
    description: "Command-line inventory system with file persistence.",
    type: "education",
    from: 2023,
    to: 2024,
    highlights: [
      "Built CRUD operations for tracking stock levels, pricing, and categories",
      "Persisted inventory state across sessions using JSON file serialization",
      "Added input validation and search filtering for quick CLI lookups",
    ],
    technologies: ["C#", ".NET", "JSON"],
  },
  {
    id: 3,
    slug: "interactive-cv",
    title: "Interactive CV Website",
    description: "Printable digital resume with dark mode.",
    type: "project",
    from: 2023,
    to: 2023,
    highlights: [
      "Created custom print stylesheets so the page exports cleanly to A4 PDF",
      "Added a persistent light/dark theme toggle synced with system preferences",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
