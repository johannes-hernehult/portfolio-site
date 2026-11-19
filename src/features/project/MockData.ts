import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "proj-01",
    slug: "count-your-bites",
    title: "Count Your Bites",
    discipline: "engineering",
    year: 2026,
    role: "Full-Stack Developer & UI Designer",
    featured: true,
    summary:
      "A fast, offline-first nutrition and macro tracker built for friction-free daily meal logging.",
    overview: [
      "Most calorie-tracking apps bury simple meal logging behind bloated social feeds, barcode paywalls, and multi-step forms. Count Your Bites was built to get a meal logged in under five seconds.",
      "Designed around optimistic UI updates and local storage caching, the app stays responsive on spotty mobile connections while syncing cleanly when back online.",
    ],
    lessons: [
      {
        title: "Optimistic State Synchronization",
        detail:
          "Implemented a local-first queue so adding or editing food entries updates the daily macro totals immediately without waiting for network round-trips.",
      },
      {
        title: "Debounced Search & Caching",
        detail:
          "Reduced external food database API calls by ~70% using an in-memory LRU cache paired with 300ms input debouncing.",
      },
      {
        title: "Keyboard-First & Mobile Ergonomics",
        detail:
          "Built custom numeric quick-entry steppers and accessible focus traps so users can log portions one-handed on mobile or via keyboard shortcuts on desktop.",
      },
    ],
    images: [
      {
        src: "/images/projects/count-your-bites/cover.webp",
        alt: "Count Your Bites daily macro dashboard showing calorie ring and meal breakdown",
        caption: "Daily macro overview and quick-add meal bar",
        tier: "cover",
      },
      {
        src: "/images/projects/count-your-bites/search-modal.webp",
        alt: "Instant food search interface with macro previews",
        caption: "Sub-100ms cached ingredient lookup",
        tier: "primary",
      },
      {
        src: "/images/projects/count-your-bites/mobile-view.webp",
        alt: "Responsive mobile layout on iOS viewport",
        tier: "secondary",
      },
    ],
    tags: ["React", "TypeScript", "Vite", "CSS Modules", "IndexedDB"],
    links: {
      live: "https://count-your-bites.example.com",
      repo: "https://github.com/johannes-hernehult/count-your-bites",
    },
  },
  {
    id: "proj-02",
    slug: "modular-sci-fi-corridor",
    title: "Modular Maintenance Bay",
    discipline: "3d",
    year: 2026,
    role: "Environment & Technical Artist",
    featured: true,
    summary:
      "A game-ready modular sci-fi environment built with trim sheets, weighted normals, and real-time lighting.",
    overview: [
      "Created an industrial orbital maintenance bay designed to demonstrate efficient modular kit assembly for real-time engines.",
      "Rather than baking unique high-to-low textures for every wall and strut, the entire scene relies on two 2K trim sheets and tileable micro-detail masks to keep draw calls and VRAM usage low.",
    ],
    lessons: [
      {
        title: "Trim Sheet & Weighted Normal Workflow",
        detail:
          "Eliminated unique normal bakes on structural meshes by combining face-weighted normals with a single beveled trim sheet, cutting texture memory by 65%.",
      },
      {
        title: "Strict Grid Snapping & Pivot Discipline",
        detail:
          "Authored all 28 modular pieces on a strict 0.5m power-of-two grid so corners, floor grates, and ceiling trusses snap seamlessly without light leaks.",
      },
      {
        title: "Atmospheric Storytelling via Roughness Variation",
        detail:
          "Used procedural dirt and edge-wear masks in the shader to break up specular reflections across repeated modular panels.",
      },
    ],
    images: [
      {
        src: "/images/projects/maintenance-bay/cover.webp",
        alt: "Main camera render of the sci-fi maintenance bay with volumetric lighting",
        caption: "Primary beauty render — real-time viewport capture",
        tier: "cover",
      },
      {
        src: "/images/projects/maintenance-bay/wireframe-kit.webp",
        alt: "Exploded view of the 28 modular pieces and UV trim layout",
        caption: "Modular kit breakdown and trim sheet UV packing",
        tier: "primary",
      },
      {
        src: "/images/projects/maintenance-bay/detail-prop.webp",
        alt: "Close-up of diagnostic console showing roughness and decal detail",
        tier: "secondary",
      },
    ],
    tags: [
      "Blender",
      "Substance Painter",
      "Unreal Engine 5",
      "Trim Sheets",
      "PBR",
    ],
    links: {
      video: "https://vimeo.com/example-turntable",
    },
  },
  {
    id: "proj-03",
    slug: "shader-playground",
    title: "WebGL Shader & Mesh Inspector",
    discipline: "engineering",
    year: 2025,
    role: "Frontend Graphics Developer",
    featured: false,
    summary:
      "A browser-based 3D model and GLSL material inspector for previewing PBR maps and wireframe topology.",
    overview: [
      "Built a lightweight browser tool that bridges 3D asset creation and web engineering—allowing artists to drag-and-drop glTF files and inspect UV seams, normals, and custom GLSL post-processing passes without opening a heavy DCC suite.",
    ],
    lessons: [
      {
        title: "Zero-Copy File Parsing",
        detail:
          "Parsed dropped binary .glb buffers directly via ArrayBuffer transferables to prevent UI thread freezes on 50MB+ meshes.",
      },
      {
        title: "Custom Debug Shader Overrides",
        detail:
          "Wrote uniform toggles to swap live PBR materials into matcap, world-normal, and texel-density checkerboard modes on the fly.",
      },
      {
        title: "Memory Leak Prevention in WebGL",
        detail:
          "Built a disposal tracker to explicitly free geometries, textures, and shader programs whenever a new model is loaded.",
      },
    ],
    images: [
      {
        src: "/images/projects/shader-inspector/cover.webp",
        alt: "3D asset loaded in browser inspector with texel density checker active",
        caption: "Texel density and wireframe overlay mode",
        tier: "cover",
      },
      {
        src: "/images/projects/shader-inspector/controls.webp",
        alt: "Side panel showing real-time lighting and uniform sliders",
        tier: "secondary",
      },
    ],
    tags: ["TypeScript", "Three.js", "GLSL", "React", "WebGL"],
    links: {
      live: "https://inspector.example.com",
      repo: "https://github.com/johannes-hernehult/shader-inspector",
    },
  },
];
