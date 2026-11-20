import { useLayoutEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router";
import "./App.css";
import ProjectPage from "./routes/project";
import LandingPage from "./routes/landingpage";
import { Navbar } from "./features/components/navigation";
import { Footer } from "./features/components/footer";

/** Renders the application routes and shared navigation and footer. */
export default function App() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
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
