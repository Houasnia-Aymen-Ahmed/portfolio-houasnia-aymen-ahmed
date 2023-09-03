/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#123456",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        someBlack: "#2c2f3f"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["inter", "serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      filter: {
        invert: 'invert(1)',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xg: "1300px",
      xgg:"1450px",
      xl: "1700px",
    },
  },
  plugins: [],
};