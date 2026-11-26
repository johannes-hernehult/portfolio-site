import { Link } from "react-router";

export function NotFound() {
  return (
    <main>
      <section className="content-section">
        <h1>404 – Page not found</h1>
        <p>The page you’re looking for doesn’t exist or may have moved.</p>
        <Link to="/" className="btn">
          <span>Back to home</span>
        </Link>
      </section>
    </main>
  );
}
