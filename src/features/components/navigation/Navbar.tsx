import { Link, NavLink } from "react-router";

export function Navbar() {
  return (
    <header>
      <Link to="/">
        <img src="images/jh.jpg" alt="Profile photo of Johannes Hernehult" />
      </Link>
      <Link to="/">
        <span>Johannes Hernehult</span>
        <br />
        <span>Fullstack Engineer</span>
      </Link>

      <nav>
        <NavLink to="/#about-me">About Me</NavLink>
        <NavLink to="/#projects">Projects</NavLink>
        <NavLink to="/#experiences">Experiences</NavLink>
        <NavLink to="/#contact">Contact</NavLink>
      </nav>
    </header>
  );
}
