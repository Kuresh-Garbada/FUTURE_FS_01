const { Miriam_Libre } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkTheme: "#0f172a",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        ovo: ["var(--font-ovo)"],
      },
    },
  },
  plugins: [],
};

