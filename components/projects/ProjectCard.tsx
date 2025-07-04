import React from "react";
import Image from "next/image";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <div className="max-w-sm mx-auto flex flex-col items-start md:items-start md:justify-center">
      <a
        href={project.link || project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full relative rounded-xl border border-fun-gray p-3 transition hover:-translate-y-2 hover:opacity-80 hover:border-fun-pink"
      >
        <Image
          className="rounded-md"
          src={project.img}
          alt={`${project.title} project thumbnail`}
          width={600}
          height={300}
          layout="responsive"
        />
      </a>

      <div className="w-full mt-5 text-left">
        <div className="flex items-center justify-between">
          <a
            href={project.link || project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-lg font-bold hover:text-fun-pink transition">
              {project.title}
            </h3>
          </a>

          <div className="space-x-2 flex items-center">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Live Site"
                />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/static/icons/github.svg"
                  width={16}
                  height={16}
                  alt="GitHub Repository"
                />
              </a>
            )}
          </div>
        </div>

        <p className="text-fun-gray text-sm mt-2">{project.desc}</p>

        <ul className="flex flex-wrap items-center mt-3 -ml-2 list-none">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Link href={`/projects/tag/${kebabCase(tag)}`}>
                <span className="m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75 transition">
                  {tag}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
