import { useEffect, useState } from "react";
import Link from "next/link";
import { routes } from "../../data/global";
import useDelayedRender from "use-delayed-render";

const routeIcons = {
  Home: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  Projects: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  Contact: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(isMenuOpen, {
    enterDelay: 20,
    exitDelay: 300,
  });

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <nav className="relative">
      {/* Top Bar */}
      <div
        className={`w-full flex justify-between items-center px-4 py-3 transition-colors duration-300 ${isMenuRendered ? "bg-bg" : ""}`}
        style={{ zIndex: 101, position: "relative" }}
      >
        <Link href="/" passHref>
          <a className="flex items-center gap-2">
            <img
              src="/static/logos/logo_full.png"
              alt="Tanveer Dev Logo"
              className="w-8 h-8"
            />
            <span className="text-white text-lg font-semibold flex">
              {"Tanveer Dev".split("").map((letter, index) => (
                <span
                  key={index}
                  className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100"
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>
          </a>
        </Link>

        <button
          className="burger relative flex items-center justify-center w-9 h-9 rounded-xl nav-burger-btn transition-all duration-300"
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}
        >
          <MenuIcon data-hide={isMenuOpen} />
          <CrossIcon data-hide={!isMenuOpen} />
        </button>
      </div>

      {/* Fullscreen Drawer */}
      {isMenuMounted && (
        <div
          className={`mobile-menu fixed inset-0 bg-bg flex flex-col ${isMenuRendered ? "mobile-menu-open" : ""}`}
          style={{ zIndex: 100 }}
        >
          <div className="mobile-menu-glow" />

          <div className="flex flex-col justify-center flex-1 px-6 gap-3 mt-16">
            {routes.map((item, index) => (
              <div
                key={index}
                className={`mobile-menu-item ${isMenuRendered ? "mobile-menu-item-open" : ""}`}
                style={{ transitionDelay: `${100 + index * 60}ms` }}
              >
                <Link href={item.path}>
                  <a
                    className="mobile-nav-item group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300"
                    onClick={toggleMenu}
                  >
                    <span className="mobile-nav-icon flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300">
                      {routeIcons[item.title]}
                    </span>
                    <span className="text-gray-400 group-hover:text-white text-lg font-medium transition-colors duration-300">
                      {item.title}
                    </span>
                    <svg className="w-4 h-4 ml-auto text-gray-700 group-hover:text-fun-pink transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </Link>
              </div>
            ))}

            {/* GitHub */}
            <div
              className={`mobile-menu-item ${isMenuRendered ? "mobile-menu-item-open" : ""}`}
              style={{ transitionDelay: `${100 + routes.length * 60}ms` }}
            >
              <a
                href="https://github.com/muhammadtanveerabbas"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-item group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300"
              >
                <span className="mobile-nav-icon flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </span>
                <span className="text-gray-400 group-hover:text-white text-lg font-medium transition-colors duration-300">
                  GitHub
                </span>
                <svg className="w-4 h-4 ml-auto text-gray-700 group-hover:text-fun-pink transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function MenuIcon(props) {
  return (
    <svg
      className="h-4 w-4 absolute text-white"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CrossIcon(props) {
  return (
    <svg
      className="h-4 w-4 absolute text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
