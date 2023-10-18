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
  title: "Computer Science @ DKIT",
  dates: "Aug 2022 - Current",
  bulletPoints: [
    "BSC In Computing (QQ1 Level 7) Graduated June 2022 with a 2:1 from Dundalk Institute of Technology",
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
  videoUrl?: string;
}

export const projects: Project[] = [
  {
    imageUrl: "/project-images/simple-saas.png",
    projectName: "Simple SaaS",
    projectDescription:
      "Next JS SaaS boilerplate to get you off the ground quicker",
    projectLiveUrl: "https://boilerplate-saas-two.vercel.app/",
    projectGithubUrl: "https://github.com/leighbriody/BoilerplateSaaS",
    projectTechStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Tailwind CSS",
      "NextAuth.js",
      "Stripe",
      "Daisy UI",
      "Preline UI",
    ],
  },
  {
    imageUrl: "/project-images/assetbrain.png",
    projectName: "Asset Brain AI",
    projectDescription:
      "Generate, Share and Store your unique digital assets using the power of AI.",
    projectLiveUrl: "http://www.assetbrainai.com",
    projectGithubUrl: "https://github.com/leighbriody/icon-generator",
    projectTechStack: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "Prisma",
      "Tailwind CSS",
      "NextAuth.js",
      "AWS S3",
      "Stripe",
    ],
  },
  {
    imageUrl: "/project-images/walkies.png",
    projectName: "Walkies",
    projectDescription:
      "Hybird On Demand Dog Walking Application - Find A Friendly Dog Walker Nearby",
    projectLiveUrl: "https://testwalkies.web.app/landing-page",
    projectGithubUrl:
      "https://github.com/leighbriody/on-demand-dog-walking-app",
    projectTechStack: [
      "Ionic",
      "Angular",
      "Firebase",
      "Typescript",
      "Maps API",
      "CSS",
    ],
    videoUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:6960223430805757953/",
    //add video URL https://www.linkedin.com/feed/update/urn:li:activity:6960223430805757953/
  },
];
