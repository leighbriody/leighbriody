import { type ExperienceItem } from "~/data/projects";

interface ExperienceListProps {
  experience: ExperienceItem;
}

export function ExperienceList(experience: ExperienceListProps) {
  return (
    <ul className="mt-8 space-y-4 text-white ">
      <li className="relative pl-4 ">
        <h3 className="mb-2 text-xl font-medium text-white">
          {experience.experience.title}
        </h3>
        <p className="font-light">{experience.experience.dates}</p>
      </li>

      {experience.experience.bulletPoints.map((experience) => (
        <>
          <li className="list-item-style relative pl-4">
            <p className="font-light">{experience}</p>
          </li>
        </>
      ))}
    </ul>
  );
}
