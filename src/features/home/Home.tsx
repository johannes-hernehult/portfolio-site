import Hero from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";
import Experience from "./sections/experience/Experience";
import About from "./sections/about/About";
import { Contact } from "../shared/components/contact";

export function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
