import "./App.css";

export default function App() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Lorem ipsum dolor sit.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nihil
          recusandae eaque!
        </p>
        <a href="#projects" className="cta">
          View Selected Work
        </a>
      </section>

      <section id="projects" className="projects">
        <h2>Selected Work</h2>
      </section>

      <section id="experience" className="experience">
        <h2>Experience</h2>
      </section>

      <section id="about" className="about">
        <h2>About</h2>
      </section>

      <section id="contact" className="contact">
        <h2>Let's get in touch</h2>
      </section>
    </main>
  );
}
