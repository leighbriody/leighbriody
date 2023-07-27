import { projects } from "~/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid() {
  return (
    <div className="mx-auto max-w-[85rem] bg-primary px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <>
            <ProjectCard project={project}></ProjectCard>
          </>
        ))}
      </div>
    </div>
  );
}
