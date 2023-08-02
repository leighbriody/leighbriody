import { type ExperienceItem } from "~/data/projects";

interface ExperienceListProps {
  experience: ExperienceItem;
}

export function ExperienceList(experience: ExperienceListProps) {
  return (
    <ul className="mt-8 space-y-4 text-white ">
      <li className="relative pl-4">
        <h3 className="mb-2 text-2xl text-white">
          {experience.experience.title}
        </h3>
        <p className="font-light text-textsecondary">
          {experience.experience.dates}
        </p>
      </li>

      {experience.experience.bulletPoints.map((experience, index) => (
        <li key={index} className="list-item-style relative pl-4">
          <p className="font-light">{experience}</p>
        </li>
      ))}
    </ul>
  );
}
