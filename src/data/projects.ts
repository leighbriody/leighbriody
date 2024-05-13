export interface ExperienceItem {
  title: string;
  dates: string;
  bulletPoints: string[];
  award?: boolean;
}

export const experienceData = [
  { title: "Software Engineer", role: "Udemy", award: false },
  { title: "Software Engineer II", role: "Propylon", award: true },

  { title: "Associate Software Engineer", role: "Propylon" },
  {
    title: "Cloud Computing",
    role: "Dundalk Institute of Technology",
  },
  { title: "Computer Science", role: "Dundalk Institute of Technology" },
];

export const udemyExpericne: ExperienceItem = {
  title: "Software Engineer @ Udemy",
  dates: "Feb 2024 - Current",
  bulletPoints: [
    "Developed scalable and resilient microservices using Spring & Kotlin.",
    "Employed Protocol Buffers (protobufs) for efficient serialization of data structures, optimizing communication between microservices and reducing network overhead.",
    "Implemented remote procedure calls (RPC) using gRPC framework to enable high-performance and language-agnostic communication between microservices.",
    "Currently learning more great things !",
  ],
  award: false,
};

export const propylonMidlevelExperience: ExperienceItem = {
  title: "Software Engineer II @ Propylon",
  dates: "Oct 2023 - Jan 2024",
  bulletPoints: [
    "Company-wide Recognition: Received the Quality Award, one of the five annual awards, for outstanding performance in quality across the organization.",
    "Technical Leadership : Provide technical leadership within the team, offering guidance and mentoring to junior engineers, helping them grow their skills and contributing to the overall team's success.",
    "Project Ownership : Successfully managed project timelines, resources, and deliverables, meeting or exceeding targets consistently.",
    "Job Application Reviews : Conducted comprehensive reviews of job applications for the position of Full Stack Engineer to assist management in identifying the ideal candidate.",
  ],
  award: true,
};

export const propylonExperience: ExperienceItem = {
  title: "Associate Software Engineer @ Propylon",
  dates: "Aug 2022 - Oct 2023",
  bulletPoints: [
    "Feature Development : Contributed to the development and delivery of high-quality, reliable services to production, applying expertise in React, TypeScript, GraphQL and Python.",
    "Improve Code Quality : Implemented ESLint rules for TypeScript naming conventions, resolving over 10 instances of naming inconsistencies.",
    "Feature Ownership : Took ownership of full feature development, encompassing both frontend and backend responsibilities.",
    "Mentorship : Provided assistance and support to two new starters by helping them with their tickets and resolving any issues they encountered during their onboarding process.",
    "Reviews : Perform daily code reviews, providing constructive feedback and promoting code quality within the team. Collaborate with colleagues to enhance code readability and maintainability.",
    "Best Practices : Demonstrated proficiency in Software Development best practices, implementing comprehensive unit tests using React Testing Library, Jest, and Pytest to ensure code quality and reliability, while validating functionality and maintaining a high level of software quality.",
    "Design : Collaborated closely with the UI/UX team, providing valuable technical insights and expertise to enhance and deliver seamless user experiences. Leveraged front-end technologies such as React, Material UI, and Tailwind CSS to implement UI designs effectively, ensuring optimal usability and visual appeal in our applications.",
  ],
};

export const cloudComputingExperience: ExperienceItem = {
  title: "Cloud Computong @ DKIT",
  dates: "Sep 2021 - May 2022",
  bulletPoints: [
    "Desgree: BSC (Hons) In Cloud Computing (QQ1 Level 8)",
    "Result: Graduated with first-class honors.",
    "AWS: Developed expertise in Cloud Architecture, AWS, and service-oriented architecture, enabling the design and implementation of scalable cloud solutions.",
    "Mobile Dev: Gained proficiency in Mobile Development and Angular, leading to the creation of responsive and interactive web applications.",
    "Firebase: Utilized Firebase and API Design principles to build real-time applications with seamless data integration.",
    "DSA: Mastered algorithms and data structures, enhancing problem-solving abilities and algorithmic thinking.",
    "Software Engineering: Successfully completed a Software Engineering & Concurrent and Distributed Programming Assignment involving Java, threads, and design patterns to build a video game system.",
    "Engineering: Demonstrated skills in C#, .NET 5, HTML5, CSS3, Bootstrap, and RESTful API integration.",
    "Final Year Project: Successfully built a dog walking hybrid application and was referred to the college's incubator for startups.",
  ],
};

export const computerScienceExperience: ExperienceItem = {
  title: "Computer Science @ DKIT",
  dates: "Sep 2018 - May 2021",
  bulletPoints: [
    "Degree: BSC In Computing (QQ1 Level 7)",
    "Result: Graduated with a second-class honors.",
    "OOP & Design Patterns: Developed a solid understanding of Object-Oriented Programming principles and design patterns.",
    "Web Development: Explored various web design patterns used in web development to create scalable and efficient applications.",
    "Security: Learned best practices for developing secure software and protecting against common vulnerabilities.",
    "Testing: Gained experience in testing web applications using various testing frameworks and techniques.",
    "Java: Acquired proficiency in Java programming language and its object-oriented features.",
    "API: Gained knowledge of RESTful API design principles and utilized web frameworks for building web applications.",
    "Databases: Learned database design and querying techniques to manage and analyze data effectively.",
    "Projects: Developed a diverse portfolio of projects, showcasing a variety of skills and technical competencies.",
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
    imageUrl: "/project-images/green-paws2.png",
    projectName: "Green Paw's",
    projectDescription: "Locate dog waste disposal bins near you",
    projectLiveUrl: "https://dog-waste-disposal-map.vercel.app/home",
    projectGithubUrl: "https://github.com/leighbriody/dog-waste-disposal-map",
    projectTechStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Tailwind CSS",
      "NextAuth.js",
      "Shadcn UI",
      "Google Maps API",
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
