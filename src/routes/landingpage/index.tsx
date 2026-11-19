import {
  Hero,
  About,
  SkillsAndTech,
  Projects,
  Experiences,
  Faq,
  Contact,
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
