import { type ExperienceItem } from "~/data/projects";
import GoldStar from "../GoldStar";

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

      {experience.experience.bulletPoints.map((item, index) => {
        const [left, right] = item.split(":");
        return (
          <li key={index} className="list-item-style relative pl-4">
            {experience.experience.award && index == 0 && <GoldStar />}
            <p className="font-light">
              <span className="text-white">{left}</span>:
              <span className="text-gray-500">{right}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}
