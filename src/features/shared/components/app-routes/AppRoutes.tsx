import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { Home } from "../../../home";
import { loadProjectPage } from "../../lib/loadProjectPage";
import { NotFound } from "../not-found";

// React.lazy needs a promise of { default: Component }, but the project feature
// only has named exports, so remap `Project` to `default`. Going through the
// shared loader means hover/focus preloads in Projects.tsx reuse the same request.
const ProjectPage = lazy(() =>
  loadProjectPage().then((m) => ({ default: m.Project })),
);

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/project/:slug"
        element={
          <Suspense fallback={<main aria-busy="true" />}>
            <ProjectPage />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
