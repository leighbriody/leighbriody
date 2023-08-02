import { Experience } from "~/components/Experience/Experience";
import { Hero } from "~/components/Hero";
import { ProjectsGrid } from "~/components/Projects/ProjectsGrid";
import { ProjectsHero } from "~/components/Projects/ProjectsHero";
import { SkillsetGrid } from "~/components/SkillsetGrid";
import { useRef } from "react";

export default function Home() {
  const el = useRef<null | HTMLDivElement>(null);

  const handleButtonClick = () => {
    if (el.current) {
      el.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Hero onClick={handleButtonClick}></Hero>
      <SkillsetGrid></SkillsetGrid>
      <ProjectsHero></ProjectsHero>
      <div ref={el}>
        <ProjectsGrid></ProjectsGrid>
      </div>
      <Experience></Experience>
    </>
  );
}
