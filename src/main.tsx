import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { Header } from "./features/shared/components/header";
import { Router } from "./features/shared/components/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Router />
      <footer>© {new Date().getFullYear()} Johannes Hernehult</footer>
    </BrowserRouter>
  </StrictMode>,
);
