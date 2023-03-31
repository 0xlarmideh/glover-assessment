/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "900px",
      lg: "1200px"
    },
    extend: {
      colors: {
        bg: "#f8f9fb",
        stroke: "#E8E8E8",
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
