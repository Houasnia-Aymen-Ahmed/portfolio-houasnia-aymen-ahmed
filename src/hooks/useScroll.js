import { useEffect } from "react";

/**
 * Custom hook for managing scroll position and ensuring page starts at top
 * Handles scroll reset on mount, after animations, and on page load
 * Also provides animation variants that reset scroll on completion
 */
export const useScroll = () => {
  useEffect(() => {
    // Immediate scroll reset
    window.scrollTo(0, 0);

    // Reset on page load
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };

    // Reset after short delay (for initial render)
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    // Reset after animation completes
    const animationTimer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);

    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(timer);
      clearTimeout(animationTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // Function to reset scroll (can be called from components)
  const resetScroll = () => {
    window.scrollTo(0, 0);
  };

  // Animation variants that reset scroll on completion
  const mainVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        onComplete: resetScroll,
      },
    },
  };

  return { mainVariants };
};
