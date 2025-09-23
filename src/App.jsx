import { useEffect, useState } from "react";
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
  CustomCursor,
  Chatbot,
  Certificates,
  Skills,
} from "./components";
import { bgImage } from "./assets";
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
  useEffect(() => {
    setReducePageLoadMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const backgroundImageUrl = `url(${bgImage})`;

  const mainVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <CustomCursor />
      <Chatbot handleThemeSwitch={handleThemeSwitch} />
      <motion.div
        className="flex font-inter"
        initial={!reducePageLoadMotion ? "hidden" : false}
        animate={!reducePageLoadMotion ? "visible" : false}
        variants={!reducePageLoadMotion ? mainVariants : undefined}
      >
        <motion.div
          className={`z-[9997] top-0 bottom-0 w-[300px] min-h-screen fixed md:fixed md:left-0 bg-light-bg-alt dark:bg-dark-bg-alt py-0 px-[15px] overflow-y-auto shadow-lg`}
          initial={false}
          animate={
            isHeaderVisible || window.innerWidth >= 768 ? "open" : "closed"
          }
          variants={{
            open: { x: 0 },
            closed: { x: "-100%" },
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Headbar />
        </motion.div>

        <div
          className="flex-1 w-full max-w-screen overflow-x-hidden bg-no-repeat bg-auto xl:bg-contain md:ml-[300px]"
          style={{ backgroundImage: backgroundImageUrl }}
        >
          <button
            type="button"
            className="fixed p-2 z-[9999] top-4 right-20 bg-accent-secondary hover:bg-accent-secondary-darker text-white text-lg rounded-md w-[50px] h-[50px] items-center justify-center md:hidden flex transition-colors relative overflow-hidden"
            onClick={(e) => {
              toggleHeader();
              createRipple(e);
            }}
          >
            {isHeaderVisible ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faClose} />
            )}
          </button>
          <button
            type="button"
            onClick={(e) => {
              handleThemeSwitch();
              createRipple(e);
            }}
            className="fixed p-2 z-[9999] top-4 right-5 bg-accent-secondary hover:bg-accent-secondary-darker text-white text-lg rounded-md w-[50px] h-[50px] items-center justify-center flex transition-colors overflow-hidden"
          >
            {theme === "dark" ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>

          <div className="flex flex-col text-light-text-primary dark:text-dark-text-primary">
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
    </>
  );
};

export default App;
