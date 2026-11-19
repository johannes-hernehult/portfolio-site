import { Contact } from "../../features/components/contact";
import {
  Hero,
  About,
  SkillsAndTech,
  Projects,
  Experiences,
  Faq,
} from "../../features/landingpage";

export default function LandingPage() {
  return (
    <main className="landing-page">
      <Hero />
      <About />
      <SkillsAndTech />
      <Projects />
      <Experiences />
      <Faq />
      <Contact />
    </main>
  );
}
