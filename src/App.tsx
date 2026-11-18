import { Link, Route, Routes } from "react-router";
import "./App.css";
import ProjectPage from "./routes/project";
import LandingPage from "./routes/landingpage";
import CVPage from "./routes/cv";
import Navigation from "./features/navigation/Navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
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
