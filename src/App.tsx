import { Link, Route, Routes } from "react-router";
import "./App.css";
import ProjectPage from "./routes/project";
import Portfolio from "./routes/portfolio";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/project/:slug" element={<ProjectPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

function NotFoundPage() {
  return (
    <main>
      <h1>Page not found</h1>
      <Link to="/">Back to home</Link>
    </main>
  );
}
