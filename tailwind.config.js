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
        "light-text-tertiary": "#6B7280", // Tailwind gray-500
        "dark-text-primary": "#E2E8F0", // Tailwind slate-200
        "dark-text-secondary": "#94A3B8", // Tailwind slate-400 - much lighter for better contrast
        "dark-text-tertiary": "#64748B", // Tailwind slate-500 - lighter for better contrast

        // Accent colors - WCAG AA compliant
        "accent-primary": "#0369A1", // Tailwind sky-700 (WCAG AA compliant on light backgrounds)
        "accent-primary-darker": "#075985", // Tailwind sky-800 (for hover states)
        "accent-primary-light": "#38BDF8", // Tailwind sky-400 (for dark backgrounds)
        "accent-secondary": "#BE185D", // Tailwind pink-700 (WCAG AA compliant on light backgrounds)
        "accent-secondary-darker": "#9D174D", // Tailwind pink-800 (for hover states)
        "accent-secondary-light": "#F574AD", // Original pink (for dark backgrounds)

        // Social media button colors
        "social-bg-light": "#334150", // Light gray for light theme
        "social-bg-dark": "#4B5563", // Medium gray for dark theme
        "social-hover": "#0369A1", // Accent primary for hover

        // Navigation colors
        "nav-bg-light": "#F3F4F6", // Light gray for light theme
        "nav-bg-dark": "#374151", // Dark gray for dark theme
        "nav-hover": "#0369A1", // Accent primary for hover

        // UI element colors
        "ui-bg-light": "#E5E7EB", // Light gray for UI elements
        "ui-bg-dark": "#374151", // Dark gray for UI elements
        "ui-border-light": "#D1D5DB", // Light border color
        "ui-border-dark": "#4B5563", // Dark border color

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
      fontSize: {
        // Typography Scale - Consistent sizing system
        display: [
          "4.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ], // 72px - Hero headings
        "display-sm": [
          "3.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ], // 56px - Large headings
        h1: [
          "2.5rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" },
        ], // 40px - Main headings
        h2: [
          "2rem",
          { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" },
        ], // 32px - Section headings
        h3: [
          "1.5rem",
          { lineHeight: "1.4", letterSpacing: "0", fontWeight: "600" },
        ], // 24px - Subsection headings
        h4: [
          "1.25rem",
          { lineHeight: "1.4", letterSpacing: "0", fontWeight: "600" },
        ], // 20px - Card headings
        h5: [
          "1.125rem",
          { lineHeight: "1.5", letterSpacing: "0", fontWeight: "600" },
        ], // 18px - Small headings
        h6: [
          "1rem",
          { lineHeight: "1.5", letterSpacing: "0", fontWeight: "600" },
        ], // 16px - Micro headings
        "body-lg": [
          "1.125rem",
          { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" },
        ], // 18px - Large body text
        body: [
          "1rem",
          { lineHeight: "1.6", letterSpacing: "0", fontWeight: "400" },
        ], // 16px - Default body text
        "body-sm": [
          "0.875rem",
          { lineHeight: "1.5", letterSpacing: "0", fontWeight: "400" },
        ], // 14px - Small body text
        caption: [
          "0.75rem",
          { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "400" },
        ], // 12px - Captions, labels
        overline: [
          "0.75rem",
          {
            lineHeight: "1.4",
            letterSpacing: "0.1em",
            fontWeight: "600",
            textTransform: "uppercase",
          },
        ], // 12px - Overlines
      },
      spacing: {
        // Custom spacing scale for consistent design
        xs: "0.25rem", // 4px
        sm: "0.5rem", // 8px
        md: "0.75rem", // 12px
        lg: "1rem", // 16px
        xl: "1.5rem", // 24px
        "2xl": "2rem", // 32px
        "3xl": "3rem", // 48px
        "4xl": "4rem", // 64px
        "5xl": "6rem", // 96px
        "6xl": "8rem", // 128px

        // Component-specific spacing
        section: "5rem", // 80px - Section spacing
        card: "1.5rem", // 24px - Card padding
        button: "0.75rem", // 12px - Button padding
        input: "0.75rem", // 12px - Input padding
        nav: "1rem", // 16px - Navigation spacing
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
