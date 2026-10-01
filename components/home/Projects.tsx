import Link from "next/link";
import React from "react";
import SectionTitle from "../global/SectionTitle";
import projects from "../../data/content/projects";

import ProjectCard from "../projects/ProjectCard";

function Projects() {
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative">
      <div id="learnmore">
        <SectionTitle title="Here are a few of my recent projects." />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {projects.slice(0, 3).map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </div>
      <div className="relative w-full mt-2">
        <Link href="/projects">
          <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base rounded-full text-fun-pink bg-fun-pink-darker hover:bg-fun-pink hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-fun-pink/30 hover:-translate-y-1 cursor-pointer">
            View All Projects
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
