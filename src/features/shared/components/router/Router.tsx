import { Route, Routes } from "react-router";
import { Home } from "../../../home";
import { Project } from "../../../project";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:slug" element={<Project />} />
    </Routes>
  );
}
