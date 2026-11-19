import { Link, Route, Routes } from "react-router";
import "./App.css";
import ProjectPage from "./routes/project";
import LandingPage from "./routes/landingpage";
import CVPage from "./routes/cv";
import { Navbar } from "./features/components/navigation";
import { Footer } from "./features/components/footer/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
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
