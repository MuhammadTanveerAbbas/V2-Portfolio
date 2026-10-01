import React from "react";
import SectionTitle from "../global/SectionTitle";

const Tag = ({ label }: { label: string }) => (
  <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md border border-fun-pink/30 text-fun-pink bg-fun-pink/5 w-fit">
    {label}
  </span>
);

function Services() {
  return (
    <section className="flex flex-col text-left max-w-6xl w-full mx-auto">
      <SectionTitle title="What I Can Do For You" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* 01 - Frontend Development - wide */}
        <div className="sm:col-span-2 lg:col-span-2 bg-fun-pink-darkest border border-fun-pink/10 rounded-2xl p-6 sm:p-7 flex flex-col gap-5 group hover:border-fun-pink/35 transition-all duration-300">
          <div className="flex items-center justify-between">
            <Tag label="Core" />
            <span className="text-[11px] font-bold text-fun-pink/30 tracking-widest">01</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-fun-pink transition-colors duration-300">
              Frontend Development
            </h3>
            <p className="text-sm text-fun-gray leading-relaxed">
              React, Next.js and TypeScript. Pixel-perfect UIs that are fast, accessible, and maintainable from day one.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((t) => (
              <span key={t} className="text-[10px] text-fun-gray border border-fun-pink/15 px-2 py-0.5 rounded-md group-hover:border-fun-pink/40 group-hover:text-fun-gray-light transition-all duration-200">
                {t}
              </span>
            ))}
          </div>
          {/* bar chart decoration */}
          <div className="flex items-end gap-1 h-8 pt-1">
            {[50, 75, 60, 95, 70, 88, 65, 82, 55, 78].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-fun-pink/15 group-hover:bg-fun-pink/35 rounded-sm transition-all duration-500"
                style={{ height: `${h}%`, transitionDelay: `${i * 30}ms` }}
              />
            ))}
          </div>
        </div>

        {/* 02 - Responsive Design */}
        <div className="bg-fun-pink-darkest border border-fun-pink/10 rounded-2xl p-6 flex flex-col gap-4 group hover:border-fun-pink/35 transition-all duration-300">
          <div className="flex items-center justify-between">
            <Tag label="Design" />
            <span className="text-[11px] font-bold text-fun-pink/30 tracking-widest">02</span>
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-fun-pink transition-colors duration-300">
              Responsive Design
            </h3>
            <p className="text-sm text-fun-gray leading-relaxed">
              Mobile-first layouts built with Tailwind that work perfectly on every screen.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {["Mobile", "Tablet", "Desktop"].map((d) => (
              <span key={d} className="text-[10px] text-fun-gray border border-fun-pink/15 px-2 py-0.5 rounded-md group-hover:border-fun-pink/40 transition-colors duration-200">
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* 03 - API Integration */}
        <div className="bg-fun-pink-darkest border border-fun-pink/10 rounded-2xl p-6 flex flex-col gap-4 group hover:border-fun-pink/35 transition-all duration-300">
          <div className="flex items-center justify-between">
            <Tag label="Backend" />
            <span className="text-[11px] font-bold text-fun-pink/30 tracking-widest">03</span>
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-fun-pink transition-colors duration-300">
              API Integration
            </h3>
            <p className="text-sm text-fun-gray leading-relaxed">
              Connecting frontends to REST APIs, third-party services, and headless CMS platforms.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["REST", "GraphQL", "CMS"].map((t) => (
              <span key={t} className="text-[10px] text-fun-gray border border-fun-pink/15 px-2 py-0.5 rounded-md group-hover:border-fun-pink/40 group-hover:text-fun-gray-light transition-all duration-200">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 04 - Performance and SEO */}
        <div className="bg-fun-pink-darkest border border-fun-pink/10 rounded-2xl p-6 flex flex-col gap-4 group hover:border-fun-pink/35 transition-all duration-300">
          <div className="flex items-center justify-between">
            <Tag label="Speed" />
            <span className="text-[11px] font-bold text-fun-pink/30 tracking-widest">04</span>
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-fun-pink transition-colors duration-300">
              Performance and SEO
            </h3>
            <p className="text-sm text-fun-gray leading-relaxed">
              Core Web Vitals, lazy loading, code splitting. Sites that rank and load fast.
            </p>
          </div>
          <div className="space-y-2">
            {[{ l: "Performance", v: 95 }, { l: "SEO", v: 90 }].map(({ l, v }) => (
              <div key={l} className="flex items-center gap-2">
                <span className="text-[10px] text-fun-gray w-[68px] shrink-0">{l}</span>
                <div className="flex-1 h-1 bg-fun-pink/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-fun-pink rounded-full opacity-50 group-hover:opacity-90 transition-opacity duration-300"
                    style={{ width: `${v}%` }}
                  />
                </div>
                <span className="text-[10px] text-fun-pink font-bold w-5 text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 05 - UI/UX Implementation */}
        <div className="sm:col-span-2 lg:col-span-1 bg-fun-pink-darkest border border-fun-pink/10 rounded-2xl p-6 flex flex-col gap-4 group hover:border-fun-pink/35 transition-all duration-300">
          <div className="flex items-center justify-between">
            <Tag label="Design" />
            <span className="text-[11px] font-bold text-fun-pink/30 tracking-widest">05</span>
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-white mb-2 group-hover:text-fun-pink transition-colors duration-300">
              UI/UX Implementation
            </h3>
            <p className="text-sm text-fun-gray leading-relaxed">
              Translating Figma designs into production-ready components with smooth, polished interactions.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["Figma", "CSS Animations", "Framer Motion"].map((t) => (
              <span key={t} className="text-[10px] text-fun-gray border border-fun-pink/15 px-2 py-0.5 rounded-md group-hover:border-fun-pink/40 group-hover:text-fun-gray-light transition-all duration-200">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;
