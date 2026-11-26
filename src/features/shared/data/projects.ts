export const PROJECTS = [
  {
    id: 1,
    slug: "count-your-bites",
    title: "Count Your Bites",
    description:
      "Self-hosted calorie and macro tracker with custom nutrition targets, analytics, and session auth.",
    tags: [
      "Svelte 5",
      "SvelteKit",
      "TypeScript",
      "SQLite",
      "Drizzle ORM",
      "Better Auth",
    ],
    cardSize: "large", // Spans 8 columns, 2 rows
    url: "/images/projects/cyb-cover.webp",
    altText: "Screenshot of the Count Your Bites web application",
    overview: [
      "Count Your Bites is a self-hosted fullstack calorie and macro-tracking web application built with Svelte 5 and SvelteKit. Users can configure custom nutrition targets and monitor daily intake.",
      "The backend pairs SQLite and Drizzle ORM with schema migrations, SvelteKit form actions, and server-side validation for type-safe persistence. Authentication is handled via Better Auth with session management, email verification, password reset flows, and API rate limiting.",
    ],
    images: [
      {
        order: 1,
        url: "/images/projects/cyb-dashboard-1.webp",
        altText: "Dashboard",
      },
      {
        order: 2,
        url: "/images/projects/cyb-dashboard-2.webp",
        altText: "Dashboard weekly average",
      },
      {
        order: 3,
        url: "/images/projects/cyb-delete-modal.webp",
        altText: "Delete an entry modal",
      },
      {
        order: 4,
        url: "/images/projects/cyb-settings-user-profile.webp",
        altText: "User profile section of settings page",
      },
    ],
    links: [
      {
        type: "live",
        url: "https://cyb.jhernehult.com/",
      },
      {
        type: "Source Code",
        url: "https://git.jhernehult.com/johannes-hernehult/count-your-bites",
      },
    ],
  },
  {
    id: 2,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Responsive developer portfolio built with React, TypeScript, CSS Modules, and fluid grid layouts.",
    tags: ["React", "TypeScript", "CSS Modules", "Responsive Design"],
    cardSize: "default", // Spans 4 columns, 1 row
    url: "/images/projects/portfolio-hero.webp",
    altText: "Cover image of Portfolio Website",
    overview: [
      "When architecting responsive interfaces, fluid grid tracks and custom CSS properties allow components to adapt seamlessly across viewport breakpoints without brittle media-query overrides. By decoupling design tokens from structural markup, teams can iterate on typography, spacing scales, and accessible focus states while maintaining zero layout shift during asynchronous hydration.",
      "Refactoring legacy state management into modular hooks eliminates prop-drilling bottlenecks and keeps render cycles predictable across deeply nested component trees.",
    ],
    images: [
      {
        order: 1,
        url: "/images/projects/portfolio-hero.webp",
        altText: "Hero section",
      },
      {
        order: 2,
        url: "/images/projects/portfolio-projects.webp",
        altText: "Projects section",
      },
      {
        order: 3,
        url: "/images/projects/portfolio-experiences.webp",
        altText: "Experiences section",
      },
      {
        order: 4,
        url: "/images/projects/portfolio-about.webp",
        altText: "About section",
      },
      {
        order: 5,
        url: "/images/projects/portfolio-contact.webp",
        altText: "Contact section",
      },
      {
        order: 6,
        url: "/images/projects/portfolio-project-hero.webp",
        altText: "Project hero section",
      },
      {
        order: 7,
        url: "/images/projects/portfolio-project-gallery.webp",
        altText: "Project gallery section",
      },
      {
        order: 8,
        url: "/images/projects/portfolio-project-contact.webp",
        altText: "Project contact section",
      },
    ],
    links: [
      {
        type: "live",
        url: "https://jhernehult.com/",
      },
      {
        type: "repo",
        url: "https://github.com/johannes-hernehult/portfolio-site",
      },
    ],
  },
  {
    id: 3,
    slug: "cv-website",
    title: "CV Website",
    description:
      "Zero-dependency static CV with print-ready A4 styling, client-side sorting, and Docker/Kamal deployment.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Print Styles",
      "Nginx",
      "Docker",
      "Kamal",
    ],
    cardSize: "default", // Spans 4 columns, 1 row
    url: "/images/projects/cv-profile-skills.webp",
    altText: "Cover image of CV website",
    overview: [
      "Built as a zero-dependency static site using semantic HTML, a single token-driven vanilla stylesheet, and progressive-enhancement JavaScript—no build step required. Dedicated @page and @media print rules pair with a one-click download button to format the page cleanly as a printable A4 resume.",
      "Lightweight scripts add experience sorting (by newest, oldest, or type) and client-side contact obfuscation with graceful <noscript> fallbacks. The site runs in an unprivileged Alpine Nginx container with asset caching, a /up healthcheck endpoint, and automated SSL deployment via Kamal.",
    ],
    images: [
      {
        order: 1,
        url: "/images/projects/cv-profile-skills.webp",
        altText: "Profile and skills section",
      },
      {
        order: 2,
        url: "/images/projects/cv-experience.webp",
        altText: "Experience section",
      },
      {
        order: 3,
        url: "/images/projects/cv-print.webp",
        altText: "Print / save as PDF preview",
      },
    ],
    links: [
      {
        type: "repo",
        url: "https://github.com/johannes-hernehult/cv-website",
      },
      {
        type: "live",
        url: "https://cv.jhernehult.com/",
      },
    ],
  },
  {
    id: 4,
    slug: "too-doo",
    title: "TooDoo",
    description:
      "C#/.NET 10 terminal task manager with color-coded due dates, sorting, and crash-safe JSON storage.",
    tags: [
      "C#",
      ".NET 10",
      "Console App",
      "JSON Persistence",
      "Clean Architecture",
    ],
    cardSize: "wide", // Spans 6 columns
    url: "/images/projects/toodoo.png",
    altText: "Terminal window running the TooDoo C# console task manager",
    overview: [
      "TooDoo is a terminal task manager built with C# and .NET 10 for tracking tasks by title, due date, and project. It features separate to-do and completed lists, sorting by due date or project, short ambiguity-free 4-character task IDs, and an ANSI color-coded table renderer.",
      "Originally built as a single tangled script, the codebase was refactored into a unidirectional architecture separating ConsoleUI, Views, TaskService, and TaskRepository. Atomic temp-file swaps protect saves against mid-write crashes, while corrupt JSON files are automatically backed up on startup rather than overwritten.",
    ],
    images: [
      {
        order: 1,
        url: "/images/projects/toodoo.png",
        altText: "Main menu",
      },
    ],
    links: [
      {
        type: "repo",
        url: "https://github.com/johannes-hernehult/todo_app-too_doo",
      },
    ],
  },
];
