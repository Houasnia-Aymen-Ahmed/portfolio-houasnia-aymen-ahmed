import { useEffect, useState } from "react";

/**
 * Custom hook for managing theme state and applying it to the document
 * @returns {Object} { theme, setTheme, toggleTheme }
 */
export const useTheme = () => {
  const [theme, setTheme] = useState(null);

  // Initialize theme based on system preference
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("dark"); // Default to dark theme
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (theme === null) {
      return;
    } // Prevent flash of unstyled content

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return { theme, setTheme, toggleTheme };
};
