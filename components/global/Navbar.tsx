import Link from "next/link";
import React from "react";
import { routes } from "../../data/global";

const routeIcons = {
  Home: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  Projects: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  Contact: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

function Navbar({ currentPage }) {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-3 lg:grid lg:grid-cols-3 lg:items-center lg:px-8">
      {/* Logo */}
      <li className="list-none font-bold text-lg cursor-pointer lg:justify-self-start">
        <Link href="/">
          <span className="font-black text-lg md:text-xl flex items-center gap-2">
            <img
              className="w-9 h-9 md:w-11 md:h-11 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
              src="/static/logos/logo_no_text.png"
              alt="logo"
            />
            <span className="hidden sm:flex">
              {"Tanveer Dev".split("").map((letter, index) => (
                <span
                  key={index}
                  className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100"
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>
          </span>
        </Link>
      </li>

      {/* Nav Links */}
      <ul className="flex items-center gap-1 sm:gap-2 lg:justify-self-center">
        {routes.map((item, index) => {
          const isActive = currentPage === item.title;
          return (
            <li key={index} className="list-none">
              <Link href={item.path}>
                <span
                  className={`nav-link group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    isActive ? "nav-link-active" : "nav-link-inactive"
                  }`}
                >
                  <span className={`transition-colors duration-300 ${isActive ? "text-fun-pink" : "nav-icon-dim"}`}>
                    {routeIcons[item.title]}
                  </span>
                  {item.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* GitHub CTA */}
      <div className="hidden lg:flex lg:justify-self-end">
        <a
          href="https://github.com/muhammadtanveerabbas"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-github-btn flex items-center gap-2 px-4 py-1.5 rounded-full text-sm transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
