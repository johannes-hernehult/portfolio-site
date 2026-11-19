import { Contact } from "../../features/components/contact";
import {
  Hero,
  About,
  SkillsAndTech,
  Projects,
  Experiences,
  experiences,
} from "../../features/landingpage";

export default function LandingPage() {
  return (
    <main className="landing-page">
      <Hero />
      <About />
      <SkillsAndTech />
      <Projects />
      <Experiences experiences={experiences} />
      <Contact />
    </main>
  );
}
