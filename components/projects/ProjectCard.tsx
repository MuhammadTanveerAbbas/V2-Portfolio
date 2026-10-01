import React from "react";
import Image from "next/image";
import Link from "next/link";

const projectIconMap: Record<string, JSX.Element> = {
  bank: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" />
      <path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z" />
      <path d="M5 17l.5 1.5L7 19l-1.5.5L5 21l-.5-1.5L3 19l1.5-.5L5 17z" />
    </svg>
  ),
  shoe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <path d="M2 17l1.5-6 4-2 3 2 5-4 4 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-1z" />
      <path d="M10.5 11l1.5 2" />
    </svg>
  ),
  plane: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  ),
  house: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  ),
  sushi: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <circle cx="12" cy="13" r="7" />
      <circle cx="12" cy="13" r="3" />
      <path d="M9 3c0 2 1 3 3 3s3-1 3-3" />
      <path d="M7.5 2.5l1 3" />
      <path d="M16.5 2.5l-1 3" />
    </svg>
  ),
};

const tagIconMap: Record<string, { icon: string; invert?: boolean }> = {
  "React":      { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  "Next.js":    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  "TypeScript": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  "TailwindCSS":{ icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  "Vite":       { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
  "HTML":       { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  "CSS":        { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  "JavaScript": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  "Node.js":    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  "netlify":    { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
  "ES6+":       { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
};

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col bg-fun-pink-darkest border border-fun-pink/10 rounded-2xl overflow-hidden">

      {/* Image */}
      <div className="p-3 border-b border-fun-pink/10">
        <div className="relative overflow-hidden rounded-xl border border-fun-pink/15">
          <Image
            src={project.img}
            alt={`${project.title} thumbnail`}
            width={600}
            height={300}
            layout="responsive"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 pt-4 gap-3">

        {/* Title + GitHub */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.icon && projectIconMap[project.icon] && (
              <span className="shrink-0 w-5 h-5 flex items-center justify-center rounded-md bg-fun-pink/10 border border-fun-pink/20 text-fun-pink">
                <span className="w-3 h-3 flex items-center justify-center">{projectIconMap[project.icon]}</span>
              </span>
            )}
            <h3 className="text-sm font-bold text-white leading-snug">
              {project.title}
            </h3>
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-8 h-8 flex items-center justify-center rounded-md border border-fun-pink/15 text-white hover:text-fun-pink transition-colors"
              aria-label="GitHub Repository"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-xs text-fun-gray leading-relaxed flex-1 text-left">{project.desc}</p>

        {/* Built with */}
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-fun-pink/40 text-left">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-fun-pink/50">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            Built with
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag: string) => {
              const meta = tagIconMap[tag];
              return (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-[10px] text-fun-gray/70 border border-fun-pink/10 px-2 py-0.5 rounded-full"
                >
                  {meta && (
                    <img
                      src={meta.icon}
                      alt={tag}
                      className="w-3 h-3 object-contain shrink-0"
                      style={meta.invert ? { filter: "invert(1)" } : undefined}
                    />
                  )}
                  {tag}
                </span>
              );
            })}
          </div>
        </div>

        {/* View Project */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto w-full flex items-center justify-center gap-1.5 text-[11px] font-bold py-2 rounded-lg bg-white text-black tracking-wide"
          >
            View Project
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}

      </div>
    </div>
  );
}

export default ProjectCard;
