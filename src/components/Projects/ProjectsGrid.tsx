import { projects } from "~/data/projects";
import { ProjectCard } from "./ProjectCard";
import { useRef } from "react";

export function ProjectsGrid() {
  const el = useRef<null | HTMLDivElement>(null);

  function handleClick() {
    el.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      ref={el}
      className="mx-auto max-w-[82rem] bg-primary px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <>
            <ProjectCard project={project}></ProjectCard>
          </>
        ))}
      </div>
      <div className="mt-10 text-center"></div>
    </div>
  );
}
