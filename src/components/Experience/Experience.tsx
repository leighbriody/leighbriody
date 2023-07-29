import { useState } from "react";
import Image from "next/image";

export function Experience() {
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  const experienceData = [
    { title: "Associate Software Engineer", role: "Propylon" },
    {
      title: "Cloud Computing Level 8",
      role: "Dundalk Institute of Technology",
    },
    { title: "Computer Science", role: "Dundalk Institute of Technology" },
  ];

  return (
    <div className="mx-auto grid max-w-screen-xl grid-cols-2 py-8">
      <div>
        <Image
          src={"/ufo.png"}
          width={200}
          height={200}
          alt="planet"
          className="ml-18 float rounded-xl"
        ></Image>
        <h2 className="float font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-b from-secondary to-white">
          Experience
        </h2>
        <h2 className="text-2xl font-light tracking-tight text-white">
          My Experience Is Always Growing.
        </h2>
        <ul className="mt-10 grid gap-y-10 border-l-4 border-blue-500 pl-4">
          {experienceData.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
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
        {/* here I want to show a bullet point list explaing my experience for each one*/}
        <ul className="mt-8 space-y-4 text-white ">
          <li className="relative pl-4 ">
            <h3 className="mb-2 text-xl font-medium text-white">
              Associate Software Engineer @ Propylon
            </h3>
            <p className="font-light">August 2022 - August 2023</p>
          </li>

          <li className="list-item-style relative pl-4">
            <p className="font-light">
              Helped develop software for government solutions side of the
              company , worked with both frontend and backend to help build and
              deploy testable code.
            </p>
          </li>

          <li className="list-item-style relative pl-4">
            <p className="font-light">
              Helped develop software for government solutions side of the
              company , worked with both frontend and backend to help build and
              deploy testable code.
            </p>
          </li>

          <li className="list-item-style relative pl-4">
            <p className="font-light">
              Helped develop software for government solutions side of the
              company , worked with both frontend and backend to help build and
              deploy testable code.
            </p>
          </li>

          <li className="list-item-style relative pl-4">
            <p className="font-light">
              Helped develop software for government solutions side of the
              company , worked with both frontend and backend to help build and
              deploy testable code.
            </p>
          </li>

          <li className="list-item-style relative pl-4">
            <p className="font-light">
              Helped develop software for government solutions side of the
              company , worked with both frontend and backend to help build and
              deploy testable code.
            </p>
          </li>

          <li className="list-item-style relative pl-4">
            <p className="font-light">
              Helped develop software for government solutions side of the
              company , worked with both frontend and backend to help build and
              deploy testable code.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
