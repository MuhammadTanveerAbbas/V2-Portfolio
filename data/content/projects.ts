import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "NexBank",
    desc: "A Production ready modren, reusable template for rapid deployment of corporate banks websites.",
    img: "/static/projects/NexBank.png",
    link: "https://nexbank-spa.vercel.app",
    github: "https://github.com/MuhammadTanveerAbbas/NexBank-SPA",
    tags: ["React", "TailwindCSS", "Vite"],
  },
  {
    id: 1,
    title: "Axel AI",
    desc: "A modern SaaS AI landing page template that I use across various projects to streamline my workflow.",
    img: "/static/projects/Axel.png",
    link: "https://axel-ai-landing-page.vercel.app/",
    github: "https://github.com/MuhammadTanveerAbbas/Axel-AI-Landing-Page",
    tags: ["React", "TailwindCSS", "Vite"],
  },
  {
    id: 2,
    title: "Nike UI",
    desc: "An ecommerce landing page designed to showcase and sell shoes while building a strong brand identity.",
    img: "/static/projects/Nike UI.png",
    link: "https://nike-ui-spa.vercel.app/",
    github: "https://github.com/MuhammadTanveerAbbas/Nike-UI",
    tags: ["React", "TailwindCSS", "Vite"],
  },
  {
    id: 3,
    title: "Zestymint",
    desc: "A mint drink website that highlights the brands refreshing beverages and builds a distinctive identity.",
    img: "/static/projects/Zestymint.png",
    link: "https://zestymint.vercel.app/",
    github: "https://github.com/MuhammadTanveerAbbas/zestymint",
    tags: ["React", "Vite", "Tailwind", "GSAP"],
  },
  {
    id: 4,
    title: "HomeVerse Ui",
    desc: "A modern real estate landing page designed to help users buy, sell, or rent properties with honest & ease.",
    img: "/static/projects/Homeverse.png",
    link: "https://homeverse-ui.netlify.app/",
    github: "https://github.com/MuhammadTanveerAbbas/homeverse-ui",
    tags: ["HTML", "CSS", "JavaScript", "netlify"],
  },
  {
    id: 5,
    title: "Sushi Ui",
    desc: "A visually appealing sushi restaurant landing page designed to showcase its curated menu experience.",
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
