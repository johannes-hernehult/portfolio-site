import { Link } from "react-router";

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
        <Link to="/#about-me">About Me</Link>
        <Link to="/#projects">Projects</Link>
        <Link to="/#experiences">Experiences</Link>
        <Link to="/#contact">Contact</Link>
      </nav>
    </header>
  );
}
