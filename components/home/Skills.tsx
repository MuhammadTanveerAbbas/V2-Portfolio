import React from "react";
import SectionTitle from "../global/SectionTitle";

const journey = [
  {
    year: "2022",
    title: "Started Web Dev",
    desc: "HTML, CSS, JS from scratch. First static sites, first bugs, first wins.",
  },
  {
    year: "2023",
    title: "React & Ecosystem",
    desc: "React, Next.js, TypeScript, Tailwind. Started shipping real projects.",
  },
  {
    year: "2024",
    title: "Full-Stack Exposure",
    desc: "Node.js, REST APIs, databases. Began taking on freelance clients.",
  },
  {
    year: "Now",
    title: "Building & Growing",
    desc: "Focused on clean UI, performance, and meaningful client work.",
  },
];

const categories = [
  {
    label: "Frontend",
    pct: 45,
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
    color: "bg-fun-pink",
  },
  {
    label: "Design",
    pct: 25,
    skills: ["Figma", "CSS", "Animations"],
    color: "bg-fun-pink/60",
  },
  {
    label: "Backend",
    pct: 20,
    skills: ["Node.js", "REST APIs", "Express"],
    color: "bg-fun-pink/35",
  },
  {
    label: "Tooling",
    pct: 10,
    skills: ["Git", "Vercel", "VS Code"],
    color: "bg-fun-pink/20",
  },
];

function Skills() {
  return (
    <section className="flex flex-col text-left max-w-6xl w-full mx-auto">
      <SectionTitle title="My Journey & Expertise" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-5">

        {/* LEFT: Timeline */}
        <div className="bg-fun-pink-darkest border border-fun-pink/10 rounded-2xl p-7 flex flex-col gap-7">
          <p className="text-[11px] font-bold tracking-widest uppercase text-fun-pink">Timeline</p>

          <div className="flex flex-col">
            {journey.map((item, i) => (
              <div key={i} className="group flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full border-2 border-fun-pink bg-fun-pink-darkest mt-1 shrink-0 group-hover:bg-fun-pink transition-colors duration-300 z-10" />
                  {i < journey.length - 1 && (
                    <div className="w-px flex-1 bg-fun-pink/15 my-1" />
                  )}
                </div>
                <div className={i < journey.length - 1 ? "pb-7" : ""}>
                  <span className="text-[11px] font-bold text-fun-pink/70 tracking-widest">{item.year}</span>
                  <h3 className="text-sm font-bold text-white mt-0.5 group-hover:text-fun-pink transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-fun-gray mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Tagline + Skill Composition */}
        <div className="flex flex-col gap-5">

          {/* Tagline */}
          <div className="bg-fun-pink-darkest border border-fun-pink/10 rounded-2xl p-7 flex flex-col gap-3">
            <p className="text-[11px] font-bold tracking-widest uppercase text-fun-pink">Focus</p>
            <p className="text-2xl font-bold text-white leading-snug">
              Frontend-first,<br />
              <span className="text-fun-pink">full-stack capable.</span>
            </p>
            <p className="text-sm text-fun-gray leading-relaxed">
              I care about the details. Fast load times, clean code, and interfaces people actually enjoy using.
            </p>
          </div>

          {/* Skill Composition */}
          <div className="bg-fun-pink-darkest border border-fun-pink/10 rounded-2xl p-7 flex flex-col gap-5 flex-1">
            <p className="text-[11px] font-bold tracking-widest uppercase text-fun-pink">Skill Composition</p>

            {/* segmented bar */}
            <div className="flex w-full h-2 rounded-full overflow-hidden gap-px">
              {categories.map(({ label, pct, color }) => (
                <div
                  key={label}
                  className={`${color} h-full transition-all duration-500`}
                  style={{ width: `${pct}%` }}
                />
              ))}
            </div>

            {/* category rows */}
            <div className="flex flex-col gap-3">
              {categories.map(({ label, pct, skills, color }) => (
                <div key={label} className="group flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full ${color} mt-[5px] shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-fun-gray-light">{label}</span>
                      <span className="text-[11px] font-bold text-fun-pink tabular-nums">{pct}%</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] text-fun-gray border border-fun-pink/15 px-2 py-0.5 rounded-md"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
