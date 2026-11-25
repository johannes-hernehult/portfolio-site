export const PROJECTS = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with React and CSS Modules.",
    tags: ["React", "CSS Modules", "Responsive Design"],
    cardSize: "large", // Spans 8 columns, 2 rows
    url: "https://placehold.co/800x500/1e293b/ffffff?text=.",
    altText: "Screenshot of the Portfolio Website",
    overview: [
      "When architecting responsive interfaces, fluid grid tracks and custom CSS properties allow components to adapt seamlessly across viewport breakpoints without brittle media-query overrides. By decoupling design tokens from structural markup, teams can iterate on typography, spacing scales, and accessible focus states while maintaining zero layout shift during asynchronous hydration.",
      "Refactoring legacy state management into modular hooks eliminates prop-drilling bottlenecks and keeps render cycles predictable across deeply nested component trees.",
    ],
    images: [
      {
        order: 1,
        url: "https://placehold.co/800x500/1e293b/ffffff?text=.",
        altText: "Cover image for portfolio project",
      },
    ],
    links: [
      {
        type: "repo",
        url: "https://github.com/johannes-hernehult/portfolio-site",
      },
      {
        type: "live",
        url: "https://cv.jhernehult.com/",
      },
    ],
  },
  {
    id: 2,
    slug: "csharp-console-app",
    title: "C# Console Inventory App",
    description: "Command-line inventory system with file persistence.",
    tags: ["C#", "Console App", "File Persistence", "Inventory"],
    cardSize: "default", // Spans 4 columns, 1 row
    url: "https://placehold.co/800x500/1e293b/ffffff?text=.",
    altText: "Terminal window running C# app",
    overview: [
      "Modern web applications rely on deterministic build pipelines, strict static typing, and incremental caching strategies to deliver sub-second interaction latency at scale. Rather than shipping monolithic client payloads, progressive architectures split execution boundaries between pre-rendered static shells and lightweight interactive islands. Every commit passes through automated linting, unit assertions, and visual regression diffs before merging into production, ensuring that dependency upgrades or stylesheet refactors never silently degrade runtime performance. Behind the scenes, structured telemetry and distributed tracing surface memory leaks and cold-start bottlenecks long before they disrupt end-user workflows.",
    ],
    images: [
      {
        order: 1,
        url: "https://placehold.co/800x500/1e293b/ffffff?text=.",
        altText: "Cover image for the C# Console Inventory App",
      },
      {
        order: 2,
        url: "https://placehold.co/800x500/1e293b/ffffff?text=.",
        altText: "Inventory management screen in the console app",
      },
    ],
    links: [
      {
        type: "repo",
        url: "https://example.com/projects/csharp-console-app/repo",
      },
      {
        type: "live",
        url: "https://example.com/projects/csharp-console-app/live",
      },
    ],
  },
  {
    id: 3,
    slug: "interactive-cv",
    title: "Interactive CV Website",
    description: "Printable digital resume with dark mode.",
    tags: ["React", "Digital Resume", "Dark Mode", "Print Styles"],
    cardSize: "default",
    url: "https://placehold.co/400x400/1e293b/ffffff?text=CV+Website",
    altText: "Preview of CV Website",
    overview: [
      "Modern web applications rely on deterministic build pipelines, strict static typing, and incremental caching strategies to deliver sub-second interaction latency at scale.",
      "Refactoring legacy state management into modular hooks eliminates prop-drilling bottlenecks and keeps render cycles predictable across deeply nested component trees.",
    ],
    images: [
      {
        order: 1,
        url: "https://placehold.co/800x500/1e293b/ffffff?text=.",
        altText: "Cover image for the Interactive CV Website",
      },
      {
        order: 2,
        url: "https://placehold.co/800x500/1e293b/ffffff?text=.",
        altText: "Dark mode view of the interactive CV",
      },
      {
        order: 3,
        url: "https://placehold.co/800x500/1e293b/ffffff?text=.",
        altText: "Print preview of the digital resume",
      },
    ],
    links: [
      {
        type: "repo",
        url: "https://example.com/projects/interactive-cv/repo",
      },
      {
        type: "live",
        url: "https://example.com/projects/interactive-cv/live",
      },
    ],
  },
  {
    id: 4,
    slug: "weather-dashboard",
    title: "Weather Forecast Dashboard",
    description: "Real-time 5-day forecasts via OpenWeather API.",
    tags: ["OpenWeather API", "Forecasting", "Weather Data", "Dashboard"],
    cardSize: "wide", // Spans 6 columns
    url: "https://placehold.co/800x500/1e293b/ffffff?text=.",
    altText: "Weather Dashboard forecast",
    overview: [
      "Modern web applications rely on deterministic build pipelines, strict static typing, and incremental caching strategies to deliver sub-second interaction latency at scale.",
      "Refactoring legacy state management into modular hooks eliminates prop-drilling bottlenecks and keeps render cycles predictable across deeply nested component trees.",
    ],
    images: [
      {
        order: 1,
        url: "https://placehold.co/800x500/1e293b/ffffff?text=.",
        altText: "Cover image for the Weather Forecast Dashboard",
      },
      {
        order: 2,
        url: "https://placehold.co/800x500/1e293b/ffffff?text=.",
        altText: "Five-day weather forecast view",
      },
      {
        order: 3,
        url: "https://placehold.co/800x500/1e293b/ffffff?text=.",
        altText: "Current weather conditions on the dashboard",
      },
    ],
    links: [
      {
        type: "repo",
        url: "https://example.com/projects/weather-dashboard/repo",
      },
      {
        type: "live",
        url: "https://example.com/projects/weather-dashboard/live",
      },
    ],
  },
  {
    id: 5,
    slug: "task-tracker",
    title: "Kanban Task Tracker",
    description: "Drag-and-drop task board with local storage.",
    tags: ["Kanban", "Drag and Drop", "Local Storage", "Task Management"],
    cardSize: "wide", // Spans 6 columns
    url: "https://placehold.co/800x500/1e293b/ffffff?text=.",
    altText: "Kanban board columns",
    overview: [
      "Modern web applications rely on deterministic build pipelines, strict static typing, and incremental caching strategies to deliver sub-second interaction latency at scale.",
      "Refactoring legacy state management into modular hooks eliminates prop-drilling bottlenecks and keeps render cycles predictable across deeply nested component trees.",
    ],
    images: [
      {
        order: 1,
        url: "https://placehold.co/800x500/1e293b/ffffff?text=.",
        altText: "Cover image for the Kanban Task Tracker",
      },
      {
        order: 2,
        url: "https://placehold.co/800x500/1e293b/ffffff?text=.",
        altText: "Kanban task board with project columns",
      },
      {
        order: 3,
        url: "https://placehold.co/800x500/1e293b/ffffff?text=.",
        altText: "Task details view in the tracker",
      },
      {
        order: 4,
        url: "https://placehold.co/800x500/1e293b/ffffff?text=.",
        altText: "Task details view in the tracker 2",
      },
    ],
    links: [
      {
        type: "repo",
        url: "https://example.com/projects/task-tracker/repo",
      },
      {
        type: "live",
        url: "https://example.com/projects/task-tracker/live",
      },
    ],
  },
];
