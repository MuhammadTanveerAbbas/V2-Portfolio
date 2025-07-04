import React from "react";
import projects from "@/data/content/projects";
import { Project } from "types";
import ProjectCard from "./ProjectCard";

type ProjectsProps = {
  overwriteProjects?: Project[];
  limit?: number;
};

function Projects({ overwriteProjects, limit = 6 }: ProjectsProps) {
  const allProjects = overwriteProjects ?? projects;
  const displayedProjects = allProjects.slice(0, limit);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
      {displayedProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
