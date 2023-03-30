/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  screens: {
    sm: "600px",
    md: "987px",
    // => @media (min-width: 640px) { ... }

    // laptop: "1024px",
    // // => @media (min-width: 1024px) { ... }

    laptop: "1280px",
    // => @media (min-width: 1280px) { ... }
  },

  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f8f9fb",
        text_light: "#6C757D",
        text_dark: "#2F2F2F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
