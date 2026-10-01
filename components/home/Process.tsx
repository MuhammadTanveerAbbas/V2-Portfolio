import React from "react";
import SectionTitle from "../global/SectionTitle";

const steps = [
  {
    num: "01",
    title: "Understand",
    desc: "Read the brief, ask the right questions, map out scope, stack, and timeline before writing a single line.",
    badge: "Scope Locked",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Design",
    desc: "Wireframes or Figma mockups first. You approve the look before I touch the code.",
    badge: "Unlimited Revisions",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16M4 10h10M4 15h6M15 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Build",
    desc: "Clean, typed, component-driven code pushed to a shared repo so you can track progress daily.",
    badge: "Daily Commits",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4 4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Ship",
    desc: "Cross-browser tested, Lighthouse checked, deployed to Vercel or your host of choice.",
    badge: "Lighthouse 90+",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
  },
];

function Process() {
  return (
    <section className="flex flex-col text-left max-w-6xl w-full mx-auto">
      <SectionTitle title="How I Work" />

      {/* Desktop: 4 columns */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-5">

        {/* Connector row: dots + lines as one flex row */}
        <div className="col-span-4 flex items-center px-6 mb-5">
          {steps.map((item, i) => (
            <React.Fragment key={i}>
              <div className="shrink-0 w-12 h-12 rounded-full border border-fun-pink/25 bg-fun-pink-darkest flex items-center justify-center text-fun-pink">
                {item.icon}
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-px bg-fun-pink/20" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Cards — no icon, just content */}
        {steps.map((item, i) => (
          <div key={i} className="flex flex-col bg-fun-pink-darkest border border-fun-pink/10 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <span className="text-[10px] font-bold text-fun-pink/40 tracking-widest">{item.num}</span>
            </div>
            <p className="text-sm text-fun-gray leading-relaxed flex-1">{item.desc}</p>
            <div className="mt-4">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-fun-pink bg-fun-pink/8 border border-fun-pink/20 px-3 py-1.5 rounded-full">
                <span className="w-1 h-1 rounded-full bg-fun-pink inline-block" />
                {item.badge}
              </span>
            </div>
          </div>
        ))}

      </div>

      {/* Mobile / Tablet: vertical timeline */}
      <div className="lg:hidden">
        <div className="flex flex-col gap-5">
          {steps.map((item, i) => (
            <div key={i} className="flex gap-4">

              {/* dot + line column */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-9 h-9 rounded-full border border-fun-pink/25 bg-fun-pink-darkest flex items-center justify-center text-fun-pink shrink-0">
                  {item.icon}
                </div>
                {/* line only between items, not after last */}
                {i < steps.length - 1 && (
                  <div className="flex-1 w-px bg-fun-pink/20 my-1" />
                )}
              </div>

              {/* card */}
              <div className="flex-1 bg-fun-pink-darkest border border-fun-pink/10 rounded-2xl p-4 mb-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <span className="text-[10px] font-bold text-fun-pink/40 tracking-widest">{item.num}</span>
                </div>
                <p className="text-sm text-fun-gray leading-relaxed mb-3">{item.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-fun-pink bg-fun-pink/8 border border-fun-pink/20 px-3 py-1.5 rounded-full">
                  <span className="w-1 h-1 rounded-full bg-fun-pink inline-block" />
                  {item.badge}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
