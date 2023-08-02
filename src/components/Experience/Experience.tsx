import { useState } from "react";
import Image from "next/image";
import { ExperienceList } from "./ExperienceList";
import {
  cloudComputingExperience,
  computerScienceExperience,
  type ExperienceItem,
  propylonExperience,
  experienceData,
} from "~/data/projects";

export function Experience() {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceItem>(propylonExperience);

  const handleItemClick = (index: number, item: string) => {
    setSelectedItem(index);
    if (item === "Associate Software Engineer") {
      setSelectedExperience(propylonExperience);
    }

    if (item === "Cloud Computing Level 8") {
      setSelectedExperience(cloudComputingExperience);
    }

    if (item === "Computer Science") {
      setSelectedExperience(computerScienceExperience);
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <Image
            src={"/ufo.png"}
            width={200}
            height={200}
            alt="planet"
            className="mx-auto rounded-xl sm:ml-20"
          />
          <h2 className="float mt-4 bg-gradient-to-b from-secondary to-white bg-clip-text text-4xl text-transparent">
            Experience
          </h2>
          <h2 className="text-2xl font-light tracking-tight text-white">
            My Experience Is Always Growing.
          </h2>
          <ul className="mt-10 grid gap-y-10 border-l-4 border-blue-500 pl-4">
            {experienceData.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(index, item.title)}
                className={`${
                  selectedItem === index ? "text-blue-500" : "text-white"
                }`}
              >
                <h1 className="mb-2 text-2xl font-medium">{item.title}</h1>
                <p className="font-light">{item.role}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ExperienceList experience={selectedExperience} />
        </div>
      </div>
    </div>
  );
}
