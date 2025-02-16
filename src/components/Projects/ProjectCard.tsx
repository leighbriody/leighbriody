import Image from "next/image";
import { Pill } from "../Pill/Pill";
import { Launch } from "../Launch/Launch";
import { Github } from "../Github/Github";
import { type Project } from "~/data/projects";
import { Video } from "../Video/Video";
interface ProjectProp {
  project: Project;
}

export function ProjectCard(project: ProjectProp) {
  return (
    <div className="group mb-10 flex h-full flex-col rounded-xl bg-primary shadow-sm">
      <div className="border-fun-gray flex h-60 flex-col items-center justify-center rounded-xl border border-fungray p-2 transition hover:-translate-y-2 hover:border-funpink hover:opacity-75">
        <Image
          src={project.project.imageUrl}
          width={500}
          height={500}
          alt="planet"
          className="h-full w-full rounded-xl"
        ></Image>
      </div>
      <div className="">
        <div className="grid grid-cols-2">
          <div>
            <h3 className="pt-8 text-xl font-semibold text-white">
              {project.project.projectName}
            </h3>
          </div>
          <div className="pt-8">
            {project.project.videoUrl && (
              <Video href={project.project.videoUrl}></Video>
            )}
            {project.project.projectGithubUrl && (
              <Github href={project.project.projectGithubUrl}></Github>
            )}
            <Launch name="Live" href={project.project.projectLiveUrl}></Launch>
          </div>
        </div>
        <p className="mt-3 font-light text-white">
          {project.project.projectDescription}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.project.projectTechStack.map((techStackitem) => (
          <>
            <div className="mr-0 mt-2">
              <Pill name={techStackitem}></Pill>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
