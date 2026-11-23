import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes, Link, useParams } from "react-router";
import Project from "./features/project/Project.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/project/1">Project 1</Link>
          <Link to="/project/2">Project 2</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/:slug" element={<Project />} />
      </Routes>

      <footer>© {new Date().getFullYear()} Johannes Hernehult</footer>
    </BrowserRouter>
  </StrictMode>,
);
