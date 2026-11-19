import { Link } from "react-router";

export function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cv">CV</Link>
    </nav>
  );
}
