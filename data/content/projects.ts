import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "NexBank",
    desc: "Enterprise-grade corporate website for credit and debit cards with a secure process.",
    img: "/static/projects/NexBank.png",
    link: "https://nexbank-spa.vercel.app",
    github: "https://github.com/MuhammadTanveerAbbas/NexBank-SPA",
    tags: ["React", "TailwindCSS", "Vite"],
  },
  {
    id: 1,
    title: "Axel AI",
    desc: "A Modern SaaS AI landing page template to boost productivity across various workflows.",
    img: "/static/projects/Axel.png",
    link: "https://axel-ai-landing-page.vercel.app/",
    github: "https://github.com/MuhammadTanveerAbbas/Axel-AI-Landing-Page",
    tags: ["React", "TailwindCSS", "Vite"],
  },
  {
    id: 2,
    title: "Nike UI",
    desc: "A ecommerce landing page for showcasing and selling Nike shoes and build brand identity.",
    img: "/static/projects/Nike UI.png",
    link: "https://nike-ui-spa.vercel.app/",
    github: "https://github.com/MuhammadTanveerAbbas/Nike-UI",
    tags: ["React", "TailwindCSS", "Vite"],
  },
  {
    id: 3,
    title: "Zestymint",
    desc: "A Mint Drink Website where the brand showcasing there Drinks and making there brand identity",
    img: "/static/projects/Zestymint.png",
    link: "https://zestymint.vercel.app/",
    github: "https://github.com/MuhammadTanveerAbbas/zestymint",
    tags: ["React", "Vite", "Tailwind", "GSAP"],
  },
  {
    id: 4,
    title: "HomeVerse Ui",
    desc: "A Real Estate Landing Page where peoples can buy or sale and can rent houses",
    img: "/static/projects/Homeverse.png",
    link: "https://homeverse-ui.netlify.app/",
    github: "https://github.com/MuhammadTanveerAbbas/homeverse-ui",
    tags: ["HTML", "CSS", "JavaScript", "netlify"],
  },
  {
    id: 5,
    title: "Sushi Ui",
    desc: "A Sushi Restrurent Landing page where they showcase there available menu of food.",
    img: "/static/projects/Sushi.png",
    link: "https://sushi-restaurant-ui.netlify.app/",
    github: "https://github.com/MuhammadTanveerAbbas/sushi-restaurant-ui",
    tags: ["HTML", "CSS", "JavaScript", "ES6+"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
