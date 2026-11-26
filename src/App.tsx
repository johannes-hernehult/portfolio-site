import "./App.css";
import { Footer } from "./features/shared/components/footer";
import { Header } from "./features/shared/components/header";
import { AppRoutes } from "./features/shared/components/app-routes";
import { useScrollOnNavigate } from "./features/shared/hooks/useScrollOnNavigate";

export function App() {
  useScrollOnNavigate();

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}
