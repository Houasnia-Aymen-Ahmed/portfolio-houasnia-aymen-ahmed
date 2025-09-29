/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light theme backgrounds
        "light-bg": "#F3F4F6", // Tailwind gray-100
        "light-bg-alt": "#FFFFFF", // White

        // Dark theme backgrounds
        "dark-bg": "#0F172A", // Tailwind slate-900
        "dark-bg-alt": "#1E293B", // Tailwind slate-800

        // Text colors
        "light-text-primary": "#1F2937", // Tailwind gray-800
        "light-text-secondary": "#4B5563", // Tailwind gray-600
        "dark-text-primary": "#E2E8F0", // Tailwind slate-200
        "dark-text-secondary": "#94A3B8", // Tailwind slate-400

        // Accent colors
        "accent-primary": "#38BDF8", // Tailwind sky-400 (a modern, friendly blue)
        "accent-primary-darker": "#0EA5E9", // Tailwind sky-500 (for hover states)
        "accent-secondary": "#F574AD", // The existing pink, can be used for specific CTAs
        "accent-secondary-darker": "#EC4899", // Tailwind pink-500

        // Old custom colors now removed:
        // dimWhite: "rgba(255, 255, 255, 0.7)",
        // dimBlue: "rgba(9, 151, 124, 0.1)",
        // someBlack: "#2c2f3f"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Good for headings
        inter: ["Inter", "sans-serif"], // Excellent for UI text, ensure "Inter" not "inter"
        raleway: ["Raleway", "sans-serif"], // Alternative for headings or body
      },
      filter: {
        invert: "invert(1)", // This seems unused, can be removed if not needed
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xg: "1300px",
      xgg: "1450px",
      xl: "1700px",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
