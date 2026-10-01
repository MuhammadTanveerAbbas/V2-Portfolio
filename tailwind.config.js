const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", "Inter", "system-ui", "sans"],
      monospace: ["DM Mono", "monospace"],
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      orange: colors.orange,
      purple: colors.purple,
      pink: colors.pink,
      transparent: "transparent",
    },
    extend: {
      colors: {
        bg: "#000a1f",
        "fun-gray-light": "#b2bbcf",
        "fun-gray": "#7b89a8",
        "fun-gray-medium": "#767c85",
        "fun-gray-darker": "#2a2a2c",
        "fun-gray-dark": "#1F1F20",
        "fun-gray-darkest": "#141414",
        "fun-pink": "#00c7ff",
        "fun-pink-darker": "#000f2e",
        "fun-pink-darkest": "#000c24",
        "fun-pink-dark": "#192742",
        "fun-pink-light": "#009ac5",
        /* Nav utility colors */
        "nav-active-bg": "rgba(0,199,255,0.08)",
        "nav-active-border": "rgba(0,199,255,0.25)",
        "nav-hover-bg": "rgba(255,255,255,0.05)",
        "nav-icon-bg": "rgba(255,255,255,0.06)",
        "nav-icon-hover": "rgba(0,199,255,0.15)",
        "nav-item-bg": "rgba(255,255,255,0.03)",
        "nav-item-border": "rgba(255,255,255,0.06)",
        "nav-item-hover-border": "rgba(0,199,255,0.22)",
        "nav-glow": "rgba(0,199,255,0.04)",
        "nav-overlay": "rgba(0,10,31,0.97)",
        "nav-blur-btn": "rgba(255,255,255,0.05)",
        "nav-blur-btn-border": "rgba(255,255,255,0.10)",
        "nav-blur-btn-hover": "rgba(0,199,255,0.08)",
        "nav-blur-btn-hover-border": "rgba(0,199,255,0.30)",
      },
      rotate: {
        360: "360deg",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeInAndBounce: "fadeIn 3s ease-out",
      },
      willChange: {
        projectCard: "border-color, opacity, transform",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
