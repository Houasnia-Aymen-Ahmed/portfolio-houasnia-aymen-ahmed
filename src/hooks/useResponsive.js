import { useEffect, useState } from "react";

/**
 * Custom hook for managing responsive behavior
 * Handles mobile menu visibility and auto-closing on desktop resize
 * @returns {Object} { isHeaderVisible, setIsHeaderVisible }
 */
export const useResponsive = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1060) {
        setIsHeaderVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleHeader = () => {
    setIsHeaderVisible((prev) => !prev);
  };

  return { isHeaderVisible, setIsHeaderVisible, toggleHeader };
};
