import { Experience } from "~/components/Experience/Experience";
import { Hero } from "~/components/Hero";
import { ProjectsGrid } from "~/components/Projects/ProjectsGrid";
import { ProjectsHero } from "~/components/Projects/ProjectsHero";
import { SkillsetGrid } from "~/components/SkillsetGrid";
import { useRef } from "react";
import { ToolsHero } from "~/components/Tools/ToolsHero";

export default function Home() {
  const el = useRef<null | HTMLDivElement>(null);
  const skills = useRef<null | HTMLDivElement>(null);
  const experience = useRef<null | HTMLDivElement>(null);

  const handleButtonClick = () => {
    if (el.current) {
      el.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSkillsClicked = () => {
    if (skills.current) {
      skills.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExperienceClicked = () => {
    if (experience.current) {
      experience.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Hero
        onClick={handleButtonClick}
        onClickSkills={handleSkillsClicked}
        onExperienceClicked={handleExperienceClicked}
      ></Hero>
      <div ref={skills}>
        <SkillsetGrid></SkillsetGrid>
      </div>
      <ProjectsHero></ProjectsHero>
      <div ref={el}>
        <ProjectsGrid></ProjectsGrid>
      </div>
      <div ref={experience}>
        <Experience></Experience>
      </div>
      <ToolsHero />
    </>
  );
}
