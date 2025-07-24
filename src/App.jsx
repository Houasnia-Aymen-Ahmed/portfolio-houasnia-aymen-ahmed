import React, { useEffect, useState, useReducer, useRef } from 'react'; // Added useRef
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Resume, Footer, Portfolio, Intro, Timeline, Headbar, About, CustomCursor } from "./components"; // Added CustomCursor
import { bgImage } from './assets';
// import useIntersectionObserver from './hooks/useIntersectionObserver'; // No longer needed
import { createRipple } from './utils/rippleEffect'; // Import createRipple for App.jsx buttons
import { motion, useReducedMotion } from 'framer-motion'; // Ensure useReducedMotion is imported

// Helper component for scroll animations using Framer Motion
const AnimatedSection = ({
  children,
  className = "", // Allow passing additional classNames
  variants = null, // Allow custom variants
  staggerChildren = 0, // Default no stagger, pass value like 0.1 for stagger
  threshold = 0.2, // Viewport amount to trigger
  triggerOnce = true
}) => {
  const shouldReduceMotion = useReducedMotion(); // Framer Motion hook

  const defaultVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        ...(staggerChildren > 0 && { staggerChildren }) // Apply stagger if value is provided
      }
    },
  };

  const activeVariants = variants || defaultVariants;

  if (shouldReduceMotion) {
    // Render children directly without motion.div if reduced motion is preferred
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className} // Apply any passed className
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, amount: threshold }}
      variants={activeVariants}
    >
      {children}
    </motion.div>
  );
};

// App component starts here, ensuring no duplication from previous merge error
const App = () => {
  const [theme, setTheme] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    else {
      setTheme('dark'); // Default to dark if not specified or if system preference is light
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleHeader = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  const [reducePageLoadMotion, setReducePageLoadMotion] = useState(false);
  useEffect(() => {
    setReducePageLoadMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const backgroundImageUrl = `url(${bgImage})`;

  const mainVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <> {/* Using Fragment to wrap CustomCursor and the main layout div */}
      <CustomCursor />
      <motion.div
        className='flex font-inter'
        initial={!reducePageLoadMotion ? "hidden" : false}
        animate={!reducePageLoadMotion ? "visible" : false}
        variants={!reducePageLoadMotion ? mainVariants : undefined}
      >
        {/* Sidebar */}
        <motion.div
          className={`z-[9997] top-0 bottom-0 w-[300px] min-h-screen fixed md:fixed md:left-0
                        bg-light-bg-alt dark:bg-dark-bg-alt
                        py-0 px-[15px] overflow-y-auto shadow-lg`} // Removed md:block and positioning classes for left
          initial={false} // Avoid initial animation based on default state, let animate prop handle it
          animate={isHeaderVisible || window.innerWidth >= 768 ? "open" : "closed"} // Control based on state and screen width (md breakpoint is 768px by default)
          variants={{
            open: { x: 0 },
            closed: { x: "-100%" }, // Use percentage for full slide out
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }} // Framer Motion transition
        >
        <Headbar />
        </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 w-full h-full bg-no-repeat bg-auto xl:bg-contain md:ml-[300px]" style={{ backgroundImage: backgroundImageUrl }}>
        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="fixed p-2 z-[9999] top-4 right-20
                     bg-accent-secondary hover:bg-accent-secondary-darker text-white
                     text-lg rounded-md w-[50px] h-[50px]
                     items-center justify-center md:hidden flex transition-colors
                     relative overflow-hidden" // Ensured top-4 right-20
          onClick={(e) => { toggleHeader(); createRipple(e); }}
          >
          {isHeaderVisible ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faClose} />}
        </button>

        {/* Theme Switch Button */}
        <button
          type="button"
          onClick={(e) => { handleThemeSwitch(); createRipple(e); }}
          className="fixed p-2 z-[9999] top-4 right-5
                     bg-accent-secondary hover:bg-accent-secondary-darker text-white
                     text-lg rounded-md w-[50px] h-[50px] items-center justify-center flex transition-colors
                     relative overflow-hidden" > {/* Ensured top-4 right-5 */}
          {theme === 'dark' ?
            <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        </button>

        <div className="flex flex-col text-light-text-primary dark:text-dark-text-primary">
          <AnimatedSection threshold={0.05}> {/* Intro might be visible quickly, lower threshold */}
            <Intro />
          </AnimatedSection>
          {/* Sections Container */}
          <div className="bg-light-bg dark:bg-dark-bg" >
            <AnimatedSection> {/* About section - will revisit its internal animations */}
              <About />
            </AnimatedSection>
            <AnimatedSection staggerChildren={0.1}> {/* Stagger Portfolio items */}
              <Portfolio />
            </AnimatedSection>
            <AnimatedSection staggerChildren={0.1}> {/* Stagger Timeline items */}
              <Timeline />
            </AnimatedSection>
            <AnimatedSection>
              <Resume />
            </AnimatedSection>
            {/* Footer is not typically animated in this way, but can be if desired */}
            <Footer theme={theme} />
          </div>
        </div>
      </div>
    </motion.div>
    </>
  );
}

export default App;
