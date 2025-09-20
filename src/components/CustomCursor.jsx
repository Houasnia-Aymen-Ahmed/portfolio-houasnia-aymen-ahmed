// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  useEffect(() => {
    const handleMouseEnterLink = () => setCursorVariant('hoverLink');
    const handleMouseLeaveLink = () => setCursorVariant('default');

    document.querySelectorAll('a, button, input[type="submit"]').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnterLink);
      el.addEventListener('mouseleave', handleMouseLeaveLink);
    });

    return () => {
      document.querySelectorAll('a, button, input[type="submit"]').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnterLink);
        el.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, []);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  // ...existing code...


  const variants = {
    initial: {
      opacity: 0,
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
    },
    default: {
      opacity: 1,
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: 'var(--color-accent-primary)',
      mixBlendMode: 'difference',
      transition: { type: 'spring', stiffness: 500, damping: 20, mass: 0.1 }
    },
    hoverLink: {
      opacity: 1,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'var(--color-accent-secondary)',
      mixBlendMode: 'difference',
      transition: { type: 'spring', stiffness: 400, damping: 15 }
    }
  };

  // Hide default cursor using global CSS (in index.css)
  // body, html { cursor: none; }
  // a, button { cursor: none; } /* Ensure interactive elements also hide default cursor */


  // Only render on client-side after mount to avoid SSR issues with window
  const [isClient, setIsClient] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  if (!isClient || reduceMotion) { // Do not render if not client or if user prefers reduced motion
    return null;
  }

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 rounded-full pointer-events-none z-[99999]"
      variants={variants}
      animate={cursorVariant}
      initial="initial"
    />
  );
};

export default CustomCursor;
