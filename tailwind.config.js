/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
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
