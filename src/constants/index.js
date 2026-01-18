import { asset } from "../utils/asset";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
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
    name: "Python Developer",
    imgPath: asset("images/logos/python.svg"),
  },
  {
    name: "Backend Developer",
    imgPath: asset("images/logos/node.png"),
  },
  {
    name: "Interactive Developer",
    imgPath: asset("images/logos/three.png"),
  },
  {
    name: "Project Manager",
    imgPath: asset("images/logos/git.svg"),
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
    imgPath: asset("images/exp1.png"),
    logoPath: asset("images/logo1.png"),
    title: "Senior Software Engineer (Frontend)",
    date: "Nov 2020 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Apollo pharmacy website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Mayank’s contributions to Aspiring Mind's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: asset("images/exp2.png"),
    logoPath: asset("images/logo2.png"),
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
    imgPath: asset("images/exp3.png"),
    logoPath: asset("images/logo3.png"),
    title: "Software Engineer (Frontend)",
    date: "June 2018 - Feb 2020",
    responsibilities: [
      "Built fast web apps using React, integrating with Infoedge's backend services.",
      "Improved web app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: asset("images/logo1.png"),
  },
  {
    name: "logo2",
    imgPath: asset("images/logo2.png"),
  },
  {
    name: "logo3",
    imgPath: asset("images/logo3.png"),
  },
];

const testimonials = [
  {
    name: "Rahul Kumar",
    mentions: "@rahulkumar",
    review:
      "I can’t say enough good things about Mayank. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: asset("images/client1.png"),
  },
  {
    name: "Suraj Kumar",
    mentions: "@surajkumar",
    review:
      "Working with Mayank was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: asset("images/client3.png"),
  },
  {
    name: "Chandra Shekhar",
    mentions: "@chandra shekhar",
    review:
      "Collaborating with Mayank was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mayank's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mayank is the ideal partner.",
    imgPath: asset("images/client2.png"),
  },
  {
    name: "Rahul D",
    mentions: "@rahuld",
    review:
      "Mayank was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: asset("images/client5.png"),
  },
  {
    name: "Sakshi Mehra",
    mentions: "@sakshimehra",
    review:
      "Mayank’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: asset("images/client4.png"),
  },
  {
    name: "Akshit Sehgal",
    mentions: "@akshitsehgal",
    review:
      "Mayank was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: asset("images/client6.png"),
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
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
