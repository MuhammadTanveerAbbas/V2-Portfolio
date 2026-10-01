import React from "react";

const techStack = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg", invert: true },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", invert: true },
];

function Stats() {
  return (
    <section className="max-w-6xl w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-fun-pink/10 rounded-2xl overflow-hidden border border-fun-pink/10 items-stretch">

        {/* availability card */}
        <div className="bg-fun-pink-darkest p-7 sm:p-8 flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-xs font-bold text-green-400 tracking-wide">Available for work</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
            Open to freelance &<br />
            <span className="text-fun-pink">contract projects</span>
          </h3>
          <p className="text-sm text-fun-gray leading-relaxed">
            Frontend-focused, full-stack capable. I build clean, fast, and maintainable web products.
          </p>
          <a
            href="/contact"
            className="mt-2 text-sm font-bold text-fun-pink border border-fun-pink/30 px-4 py-2 rounded-lg hover:bg-fun-pink/10 hover:border-fun-pink transition-all duration-200"
          >
            Get in touch ➔
          </a>
        </div>

        {/* tech icons grid */}
        <div className="bg-fun-pink-darkest p-7 sm:p-8 flex flex-col items-center gap-4">
          <p className="text-[11px] font-bold tracking-widest uppercase text-fun-pink">Daily Stack</p>
          <div className="grid grid-cols-4 gap-x-6 gap-y-5 w-full">
            {techStack.map(({ name, icon, invert }) => (
              <div key={name} className="flex flex-col items-center gap-2 group">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src={icon}
                    alt={name}
                    className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-200"
                    style={invert ? { filter: "invert(1)" } : undefined}
                  />
                </div>
                <span className="text-[10px] text-fun-gray group-hover:text-fun-gray-light transition-colors duration-200 text-center">{name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Stats;
