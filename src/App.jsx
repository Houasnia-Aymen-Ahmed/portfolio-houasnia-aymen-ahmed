import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import {
  Resume,
  Footer,
  Portfolio,
  Intro,
  Timeline,
  Headbar,
  About,
  Chatbot,
  Certificates,
  Skills,
  ErrorBoundary,
} from "./components";
import { createRipple } from "./utils/rippleEffect";
import { motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";

const AnimatedSection = ({
  children,
  className = "",
  variants = null,
  staggerChildren = 0,
  threshold = 0.2,
  triggerOnce = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const defaultVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        ...(staggerChildren > 0 && { staggerChildren }),
      },
    },
  };

  const activeVariants = variants || defaultVariants;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, amount: threshold }}
      variants={activeVariants}
    >
      {children}
    </motion.div>
  );
};

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variants: PropTypes.object,
  staggerChildren: PropTypes.number,
  threshold: PropTypes.number,
  triggerOnce: PropTypes.bool,
};

const App = () => {
  const [theme, setTheme] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("dark");
    }
  }, []);

  // Auto-close on desktop resize (optional)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1060) {
        setIsHeaderVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleHeader = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  const [reducePageLoadMotion, setReducePageLoadMotion] = useState(false);
  const followerRef = useRef(null);

  useEffect(() => {
    setReducePageLoadMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  // Blurred glow effect that follows default cursor
  useEffect(() => {
    if (reducePageLoadMotion) {
      return;
    }

    const glow = followerRef.current;

    if (!glow) {
      return;
    }

    const handleMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      // Center the glow exactly on the cursor position
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    };

    document.addEventListener("mousemove", handleMove);

    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, [reducePageLoadMotion]);

  const mainVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <ErrorBoundary>
      {/* Blurred glow effect that follows default cursor */}
      <div
        ref={followerRef}
        className="fixed pointer-events-none z-[99999] w-[120px] h-[120px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(51, 65, 85, 0.9) 0%, rgba(51, 65, 85, 0.6) 30%, rgba(51, 65, 85, 0.3) 60%, transparent 80%)",
          transform: "translate(-50%, -50%)",
          left: "0px",
          top: "0px",
          filter: "blur(20px)",
          mixBlendMode: "screen",
          opacity: "1",
        }}
      />
      <Chatbot handleThemeSwitch={handleThemeSwitch} />
      <motion.div
        className="flex font-inter"
        initial={reducePageLoadMotion ? false : "hidden"}
        animate={reducePageLoadMotion ? false : "visible"}
        variants={reducePageLoadMotion ? undefined : mainVariants}
      >
        <motion.div
          className={`z-[9997] top-0 bottom-0 w-[300px] min-h-screen fixed bg-light-bg-alt dark:bg-dark-bg-alt py-0 px-[15px] overflow-y-auto shadow-lg
                     transform transition-transform duration-300 ease-in-out
                     ${isHeaderVisible ? "translate-x-0" : "-translate-x-full"}
                     md:translate-x-0 md:relative md:flex-shrink-0`}
          initial={false}
        >
          <Headbar />
        </motion.div>

        {/* Mobile backdrop overlay */}
        {isHeaderVisible && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[9996] md:hidden"
            onClick={toggleHeader}
          />
        )}

        <div className="flex-1 w-full max-w-screen overflow-x-hidden relative">
          {/* 3D Hexagon Tech Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
            {/* Full background hexagon grid with random transparency */}
            <div className="absolute inset-0">
              {[...Array(200)].map((_, i) => {
                const row = Math.floor(i / 20);
                const col = i % 20;
                const x = col * 60 + (row % 2) * 30;
                const y = row * 52;

                // Random opacity between 0 and 0.4 (more transparent)
                const randomOpacity = Math.random() * 0.4;
                // Random rotation between -15 and 15 degrees
                const randomRotation = (Math.random() - 0.5) * 30;

                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      width: "50px",
                      height: "43.3px",
                      background:
                        "linear-gradient(145deg, rgba(37, 99, 235, 0.3), rgba(29, 78, 216, 0.2))",
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      boxShadow: "inset 0 0 8px rgba(59, 130, 246, 0.2)",
                      opacity: randomOpacity,
                      transform: `rotate(${randomRotation}deg)`,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  />
                );
              })}
            </div>

            {/* Hexagon borders with random transparency */}
            <div className="absolute inset-0">
              {[...Array(200)].map((_, i) => {
                const row = Math.floor(i / 20);
                const col = i % 20;
                const x = col * 60 + (row % 2) * 30;
                const y = row * 52;

                // Random opacity for borders
                const randomOpacity = Math.random() * 0.3;
                const randomRotation = (Math.random() - 0.5) * 30;

                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      width: "50px",
                      height: "43.3px",
                      background: "transparent",
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      border: "1px solid rgba(59, 130, 246, 0.6)",
                      opacity: randomOpacity,
                      transform: `rotate(${randomRotation}deg)`,
                    }}
                  />
                );
              })}
            </div>

            {/* 3D highlights with random transparency */}
            <div className="absolute inset-0">
              {[...Array(200)].map((_, i) => {
                const row = Math.floor(i / 20);
                const col = i % 20;
                const x = col * 60 + (row % 2) * 30;
                const y = row * 52;

                // Random opacity for highlights
                const randomOpacity = Math.random() * 0.2;
                const randomRotation = (Math.random() - 0.5) * 30;

                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      width: "50px",
                      height: "43.3px",
                      background:
                        "linear-gradient(135deg, rgba(96, 165, 250, 0.3) 0%, transparent 50%)",
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      opacity: randomOpacity,
                      transform: `rotate(${randomRotation}deg)`,
                    }}
                  />
                );
              })}
            </div>

            {/* Connection dots with random visibility */}
            <div className="absolute inset-0">
              {[...Array(100)].map((_, i) => {
                const row = Math.floor(i / 10);
                const col = i % 10;
                const x = col * 120 + 25;
                const y = row * 104 + 21.65;

                // Random opacity for connection dots
                const randomOpacity = Math.random() * 0.4;

                return (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-500 rounded-full"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      boxShadow: "0 0 4px rgba(59, 130, 246, 0.4)",
                      opacity: randomOpacity,
                    }}
                  />
                );
              })}
            </div>

            {/* Subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(37, 99, 235, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(37, 99, 235, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: "30px 30px",
              }}
            />
          </div>
          {/* Mobile Menu Button - Only visible on small screens */}

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={(e) => {
              handleThemeSwitch();
              createRipple(e);
            }}
            className="fixed p-2 z-[9999] top-4 left-4 bg-accent-secondary hover:bg-accent-secondary-darker text-white text-lg rounded-md w-[50px] h-[50px] items-center justify-center flex transition-colors overflow-hidden"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
          <button
            type="button"
            className="fixed p-2 z-[9999] top-4 left-20 bg-accent-secondary hover:bg-accent-secondary-darker text-white text-lg rounded-md w-[50px] h-[50px] items-center justify-center md:hidden flex transition-colors overflow-hidden"
            onClick={(e) => {
              toggleHeader();
              createRipple(e);
            }}
            aria-label={isHeaderVisible ? "Close menu" : "Open menu"}
          >
            {isHeaderVisible ? (
              <FontAwesomeIcon icon={faClose} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>

          <div className="relative z-10 flex flex-col text-light-text-primary dark:text-dark-text-primary">
            <AnimatedSection threshold={0.05}>
              <Intro />
            </AnimatedSection>
            <div className="bg-light-bg dark:bg-dark-bg">
              <AnimatedSection>
                <About />
              </AnimatedSection>
              <AnimatedSection staggerChildren={0.1}>
                <Portfolio />
              </AnimatedSection>
              <AnimatedSection staggerChildren={0.1}>
                <Timeline />
              </AnimatedSection>
              <AnimatedSection>
                <Skills />
              </AnimatedSection>
              <AnimatedSection>
                <Certificates />
              </AnimatedSection>
              <AnimatedSection>
                <Resume />
              </AnimatedSection>
              <Footer theme={theme} />
            </div>
          </div>
        </div>
      </motion.div>
    </ErrorBoundary>
  );
};

export default App;
