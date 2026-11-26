import { HomeHero } from "./sections/hero/HomeHero";
import { Projects } from "./sections/projects/Projects";
import { Experience } from "./sections/experience/Experience";
import { About } from "./sections/about/About";
import { Contact } from "../shared/components/contact";

export function Home() {
  return (
    <main>
      <HomeHero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
