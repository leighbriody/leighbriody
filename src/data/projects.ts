export interface ExperienceItem {
  title: string;
  dates: string;
  bulletPoints: string[];
}

export const experienceData = [
  { title: "Associate Software Engineer", role: "Propylon" },
  {
    title: "Cloud Computing Level 8",
    role: "Dundalk Institute of Technology",
  },
  { title: "Computer Science", role: "Dundalk Institute of Technology" },
];

export const propylonExperience: ExperienceItem = {
  title: "Associate Software Engineer @ Propylon",
  dates: "Aug 2022 - Current",
  bulletPoints: [
    "Contributed to the development and delivery of high-quality, reliable services to production, applying expertise in React, TypeScript, GraphQL and Python to create fully responsive web pages with Material UI, resulting in intuitive and visually appealing user interfaces.",
    "Implemented ESLint rules for TypeScript naming conventions, resolving over 10 instances of naming inconsistencies. Improved code quality and collaboration by enforcing consistent naming practices in the project.",
    "Took ownership of full feature development, encompassing both frontend and backend responsibilities, for the Office JS Word add-in. Leveraged React, TypeScript, Python, and GraphQL to successfully design, implement, and deploy fully functional features.",
    "Provided assistance and support to two new starters by helping them with their tickets and resolving any issues they encountered during their onboarding process. Played a key role in ensuring a smooth transition and facilitating their integration into the team.",
    "Perform daily code reviews, providing constructive feedback and promoting code quality within the team. Collaborate with colleagues to enhance code readability and maintainability.",
    "Demonstrated proficiency in Software Development best practices, implementing comprehensive unit tests using React Testing Library, Jest, and Pytest to ensure code quality and reliability, while validating functionality and maintaining a high level of software quality.",
    "Collaborated closely with the UI/UX team, providing valuable technical insights and expertise to enhance and deliver seamless user experiences. Leveraged front-end technologies such as React, Material UI, and Tailwind CSS to implement UI designs effectively, ensuring optimal usability and visual appeal in our applications.",
  ],
};

export const cloudComputingExperience: ExperienceItem = {
  title: "Cloud Computong @ DKIT",
  dates: "Sep 2021 - May 2022",
  bulletPoints: [
    "Graduated with 1:1 Results",
    "Developed expertise in Cloud Architecture, AWS, and service-oriented architecture, enabling the design and implementation of scalable cloud solutions.",
    "Gained proficiency in Mobile Development and Angular, leading to the creation of responsive and interactive web applications.",
    "Utilized Firebase and API Design principles to build real-time applications with seamless data integration.",
    "Mastered algorithms and data structures, enhancing problem-solving abilities and algorithmic thinking.",
    "Successfully completed a Software Engineering & Concurrent and Distributed Programming Assignment involving Java, threads, and design patterns to build a video game system.",
    "Demonstrated skills in C#, .NET 5, HTML5, CSS3, Bootstrap, and RESTful API integration.",
    "Engaged in research methods, improving the ability to conduct thorough research and analysis.",
    "Contributed to open-source projects hosted on GitHub, showcasing programming skills and collaborative development.",
    "Effectively managed project development and deadlines, fostering organizational and time management skills.",
    "Acquired valuable teamwork and communication experience through group projects and peer collaborations.",
  ],
};

export const computerScienceExperience: ExperienceItem = {
  title: "Computer Science@ Propylon",
  dates: "Aug 2022 - Current",
  bulletPoints: [
    "BSC In Computing (QQ1 Level 7) Graduated June 2022 with a 2:1 from Dundalk Institute of Technology",
    "Graduated with a 2:1, showcasing a strong academic performance and dedication to learning.",
    "Developed a solid understanding of Object-Oriented Programming principles and design patterns.",
    "Explored various web design patterns used in web development to create scalable and efficient applications.",
    "Learned best practices for developing secure software and protecting against common vulnerabilities.",
    "Gained experience in testing web applications using various testing frameworks and techniques.",
    "Acquired proficiency in Java programming language and its object-oriented features.",
    "Studied the software development lifecycle and best practices for managing large-scale projects.",
    "Gained knowledge of RESTful API design principles and utilized web frameworks for building web applications.",
    "Learned database design and querying techniques to manage and analyze data effectively.",
    "Practiced Agile methodologies like Scrum and Kanban in team-based software development projects.",
    "Developed a diverse portfolio of projects, showcasing a variety of skills and technical competencies.",
  ],
};

export interface Project {
  imageUrl: string;
  projectName: string;
  projectDescription: string;
  projectLiveUrl: string;
  projectGithubUrl: string;
  projectTechStack: string[];
}

export const projects: Project[] = [
  {
    imageUrl: "/project-images/assetbrain.png",
    projectName: "Asset Brain AI",
    projectDescription:
      "Generate, Share and Store your unique digital assets using the power of AI.",
    projectLiveUrl: "http://www.assetbrainai.com",
    projectGithubUrl: "https://github.com/leighbriody/icon-generator",
    projectTechStack: [
      "react",
      "node",
      "express",
      "mongo",
      "tailwind",
      "aws s3",
      "stripe",
    ],
  },
  {
    imageUrl: "/project-images/codeninja.png",
    projectName: "Code Ninja",
    projectDescription:
      "Online web application to help users understand, test, and improve their code.",
    projectLiveUrl: "http://www.google.com",
    projectGithubUrl: "http://www.google.com",
    projectTechStack: ["react", "node", "express", "mongo", "tailwind"],
  },
  {
    imageUrl: "/project-images/codeninja.png",
    projectName: "Code Ninja",
    projectDescription:
      "Online web application to help users understand, test, and improve their code.",
    projectLiveUrl: "http://www.google.com",
    projectGithubUrl: "http://www.google.com",
    projectTechStack: ["react", "node", "express", "mongo", "tailwind"],
  },
  {
    imageUrl: "/project-images/codeninja.png",
    projectName: "Code Ninja",
    projectDescription:
      "Online web application to help users understand, test, and improve their code.",
    projectLiveUrl: "http://www.google.com",
    projectGithubUrl: "http://www.google.com",
    projectTechStack: ["react", "node", "express", "mongo", "tailwind"],
  },
  {
    imageUrl: "/project-images/codeninja.png",
    projectName: "Code Ninja",
    projectDescription:
      "Online web application to help users understand, test, and improve their code.",
    projectLiveUrl: "http://www.google.com",
    projectGithubUrl: "http://www.google.com",
    projectTechStack: ["react", "node", "express", "mongo", "tailwind"],
  },
  {
    imageUrl: "/project-images/codeninja.png",
    projectName: "Code Ninja",
    projectDescription:
      "Online web application to help users understand, test, and improve their code.",
    projectLiveUrl: "http://www.google.com",
    projectGithubUrl: "http://www.google.com",
    projectTechStack: ["react", "node", "express", "mongo", "tailwind"],
  },
];
