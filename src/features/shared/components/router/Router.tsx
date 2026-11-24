import { Route, Routes } from "react-router";
import App from "../../../../App";
import Project from "../../../project/Project";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/project/:slug" element={<Project />} />
    </Routes>
  )
}
