import { useLocation } from "react-router";
import { MainNav } from "./MainNav";
import { ProjectNav } from "./ProjectNav";

export function Navbar() {
  const { pathname } = useLocation();

  return pathname.startsWith("/project/") ? (
    <ProjectNav />
  ) : (
    <MainNav key={pathname} />
  );
}
