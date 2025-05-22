import project1 from "../assets/sig-perkim.png";
import project2 from "../assets/sot-pertamina.png";
import project3 from "../assets/crowdfunding.png";

export const projects = [
  {
    id: 1,
    name: "SIG Perkim Banten",
    description:
      "SIG Perkim Banten is a Geographic Information System project. It includes features to display locations in several categories such as housing, disaster-prone areas, and housing management.",
    technologies: [
      "Typescript",
      "React Native",
      "Zustand",
      "React Query",
      "MapBox",
    ],
    image: project1,
  },
  {
    id: 2,
    name: "SOT Pertamina EP",
    description:
      "SOT Pertamina EP is an application that displays oil and gas production results from Pertamina. The production results are shown in graphs and tables that can be viewed by all internal employees of Pertamina EP.",
    technologies: ["Javascript", "React Native", "Firebase", "Redux"],
    image: project2,
  },
  {
    id: 3,
    name: "Crowdfunding",
    description:
      "Crowdfunding is an application that allows users to donate money to a cause.",
    technologies: ["Javascript", "React Native", "Firebase", "Context API"],
    image: project3,
  },
];
