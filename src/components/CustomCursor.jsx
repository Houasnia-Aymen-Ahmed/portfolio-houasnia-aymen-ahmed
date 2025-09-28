// === code cursor ===
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);

  useEffect(() => {
    const handleMouseEnter = (e) => {
      setIsHovering(true);
      setHoveredElement(e.target);
    };
    const handleMouseLeave = () => {
      setIsHovering(false);
      setHoveredElement(null);
    };

    // Add event listeners for text and div elements
    document
      .querySelectorAll("div, p, h1, h2, h3, h4, h5, h6, span, a, button")
      .forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });

    return () => {
      document
        .querySelectorAll("div, p, h1, h2, h3, h4, h5, h6, span, a, button")
        .forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter);
          el.removeEventListener("mouseleave", handleMouseLeave);
        });
    };
  }, []);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // Only render on client-side after mount to avoid SSR issues with window
  const [isClient, setIsClient] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  // If not client-side or user prefers reduced motion, show default cursor
  if (!isClient || reduceMotion) {
    return (
      <style>
        {`
          html, body { cursor: auto !important; }
          a, button, input[type="submit"], input[type="text"], textarea, select { cursor: pointer !important; }
        `}
      </style>
    );
  }

  // Calculate width based on hovered element and nesting level
  const getCursorWidth = () => {
    if (!isHovering || !hoveredElement) {
      return 20;
    }

    // Check if element is a div and count nesting level
    if (hoveredElement.tagName === "DIV") {
      let parent = hoveredElement.parentElement;
      let nestingLevel = 0;

      // Count div parents
      while (parent) {
        if (parent.tagName === "DIV") {
          nestingLevel++;
        }
        parent = parent.parentElement;
      }

      console.log(
        "Div nesting level:",
        nestingLevel,
        "Element:",
        hoveredElement
      );

      // Only take width if it's 3rd level div or deeper (nestingLevel >= 2)
      if (nestingLevel >= 2) {
        const rect = hoveredElement.getBoundingClientRect();
        const elementWidth = rect.width;
        console.log("Element width:", elementWidth);
        return Math.min(Math.max(elementWidth, 20), 200);
      }
    }

    return 20; // Default small width
  };

  const cursorWidth = getCursorWidth();
  const shouldExpand =
    isHovering && hoveredElement?.tagName === "DIV" && cursorWidth > 20;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{
        x: mousePosition.x - cursorWidth / 2,
        y: mousePosition.y - 8,
        width: cursorWidth,
        height: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      animate={{
        width: cursorWidth,
        x: mousePosition.x - cursorWidth / 2,
        y: mousePosition.y - 8,
        opacity: isHovering ? 1 : 0.8,
        scale: isHovering ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
    >
      <motion.span
        className="text-[#0ea5e9] font-mono text-sm font-bold"
        animate={{
          opacity: isHovering ? 1 : 0.7,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        {shouldExpand ? "<             />" : "<>"}
      </motion.span>
    </motion.div>
  );
};
// === code cursor ===

export default CustomCursor;
