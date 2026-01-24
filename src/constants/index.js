import { asset } from "../utils/asset";

const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: asset("images/ideas.svg") },
  { text: "Concepts", imgPath: asset("images/concepts.svg") },
  { text: "Designs", imgPath: asset("images/designs.svg") },
  { text: "Code", imgPath: asset("images/code.svg") },
  { text: "Ideas", imgPath: asset("images/ideas.svg") },
  { text: "Concepts", imgPath: asset("images/concepts.svg") },
  { text: "Designs", imgPath: asset("images/designs.svg") },
  { text: "Code", imgPath: asset("images/code.svg") },
];

const counterItems = [
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: "1K", suffix: "+", label: "LinkedIn Followers" },
  { value: 25, suffix: "+", label: "Github Projects" },
];

const abilities = [
  {
    imgPath: asset("images/seo.png"),
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: asset("images/chat.png"),
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: asset("images/time.png"),
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: asset("images/logos/react.png"),
  },
  {
    name: "Interactive Developer",
    imgPath: asset("images/logos/three.png"),
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: asset("models/react_logo-transformed.glb"),
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript Developer",
    modelPath: asset("models/node-transformed.glb"),
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: asset("models/three.js-transformed.glb"),
    scale: 0.05,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review: "Mayank brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: asset("images/apollo247.webp"),
    logoPath: asset("images/apollo247.webp"),
    title: "Senior Software Engineer (Frontend)",
    date: "Nov 2020 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Apollo suites of web applications.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Mayank’s contributions to Aspiring Mind's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: asset("images/shl-am.jpg"),
    logoPath: asset("images/shl-am.jpg"),
    title: "Software Engineer (Frontend)",
    date: "March 2020 - November 2020",
    responsibilities: [
      "Led the development of AMCAT web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to projects that were used with the SHL ecosystem.",
    ],
  },
  {
    review: "Mayank’s work on Infoedge's web suite of applications brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: asset("images/infoedge.png"),
    logoPath: asset("images/infoedge.png"),
    title: "Software Engineer (Frontend)",
    date: "June 2018 - Feb 2020",
    responsibilities: [
      "Built fast web apps using React, integrating with Infoedge's backend services.",
      "Improved web app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const educationCards = [
  {
    review: "Delhi Technological University provided a strong foundation in computer science principles, with a focus on practical application and research.",
    imgPath: asset("images/dtu.png"),
    logoPath: asset("images/dtu.png"),
    title: "Bachelor of Technology in Computer Science",
    date: "2014 - 2018",
    grade: "8.87 CGPA",
    responsibilities: [
      "Completed rigorous coursework in Data Structures, Algorithms, and Software Engineering.",
      "Participated in various hackathons and coding competitions.",
      "Built multiple projects using advanced tools and technologies.",
    ],
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: asset("images/insta.png"),
  },
  {
    name: "fb",
    imgPath: asset("images/fb.png"),
  },
  {
    name: "x",
    imgPath: asset("images/x.png"),
  },
  {
    name: "linkedin",
    imgPath: asset("images/linkedin.png"),
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  educationCards,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
