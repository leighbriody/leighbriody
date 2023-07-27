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
    projectTechStack: ["react", "node", "express", "mongo", "tailwind" , "aws s3" , "stripe"],
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
