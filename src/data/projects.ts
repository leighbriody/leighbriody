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
    imageUrl: "",
    projectName: "Code Ninja",
    projectDescription: "Online web application to help users understand, test, and improve their code.",
    projectLiveUrl: "http://www.google.com",
    projectGithubUrl: "",
    projectTechStack: ["react"],
  },
];
