import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";

function Navbar({ currentPage }) {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-2 lg:grid lg:grid-cols-3 lg:items-center lg:px-8">
      <li className="list-none font-bold text-lg cursor-pointer lg:justify-self-start lg:-ml-40">
        <Link href="/">
          <span className="font-black text-lg md:text-xl flex items-center">
            <img
              className="mr-2 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
              src="/static/logos/logo_no_text.png"
            />
            <span className="hidden sm:flex">
              {"Tanveer Dev".split("").map((letter, index) => {
                return (
                  <span
                    key={index}
                    className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                );
              })}
            </span>
          </span>
        </Link>
      </li>
      <ul className="flex items-center space-x-4 md:space-x-6 lg:space-x-10 lg:justify-self-center">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white text-sm md:text-base ${
                currentPage === item.title
                  ? "opacity-100 font-semibold"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }`}
            >
              <Link href={item.path}>
                <span className="hover:text-fun-pink transition-colors duration-300">
                  {item.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="hidden lg:block lg:justify-self-end lg:-mr-40">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-fun-pink transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
