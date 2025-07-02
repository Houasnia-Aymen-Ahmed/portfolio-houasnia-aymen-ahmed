// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useReducer, useRef } from 'react'; // Added useRef
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Resume, Footer, Portfolio, Intro, Timeline, Headbar, About } from "./components";
import { bgImage } from './assets';
import useIntersectionObserver from './hooks/useIntersectionObserver'; // Import the hook
import { createRipple } from './utils/rippleEffect'; // Import createRipple for App.jsx buttons

// Helper component for scroll animations
const AnimatedSection = ({ children, animationProps = {}, threshold = 0.1, triggerOnce = true }) => {
  const [elementRef, isIntersecting] = useIntersectionObserver({ threshold, triggerOnce });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isIntersecting, hasAnimated]);

  const defaultAnimation = {
    initial: "opacity-0 translate-y-10",
    animate: "opacity-100 translate-y-0",
    transition: "transition-all duration-700 ease-out",
  };

  const currentAnimation = { ...defaultAnimation, ...animationProps };

  if (reduceMotion) {
    return <div ref={elementRef}>{children}</div>; // No animation if prefers-reduced-motion
  }

  return (
    <div
      ref={elementRef}
      className={`${currentAnimation.transition} ${isIntersecting || hasAnimated ? currentAnimation.animate : currentAnimation.initial}`}
    >
      {children}
    </div>
  );
};


const App = () => {
  const [theme, setTheme] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    else {
      setTheme('dark');
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

  const backgroundImageUrl = `url(${bgImage})`;

  return (
    <div className='flex font-inter'> {/* Moved font-inter here to be default */}
      {/* Sidebar */}
      <div className={`z-[9997] top-0 bottom-0 w-[300px] min-h-screen fixed md:fixed md:left-0
                      bg-light-bg-alt dark:bg-dark-bg-alt
                      md:block ${isHeaderVisible ? 'left-[-300px]' : 'left-0'}
                      transition-all ease-in-out duration-500 py-0 px-[15px] overflow-y-auto shadow-lg`}>
        <Headbar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full h-full bg-no-repeat bg-auto xl:bg-contain md:ml-[300px]" style={{ backgroundImage: backgroundImageUrl }}>
        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="fixed p-2 z-[9999] right-20 top-4
                     bg-accent-secondary hover:bg-accent-secondary-darker text-white
                     text-lg rounded-md w-[50px] h-[50px]
                     items-center justify-center md:hidden flex transition-colors
                     relative overflow-hidden" // Added for ripple
          onClick={(e) => { toggleHeader(); createRipple(e); }} // Combined onClick
          >
          {isHeaderVisible ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faClose} />}
        </button>

        {/* Theme Switch Button */}
        <button
          type="button"
          onClick={(e) => { handleThemeSwitch(); createRipple(e); }} // Combined onClick
          className="fixed p-2 z-[9999] right-5 top-4
                     bg-accent-secondary hover:bg-accent-secondary-darker text-white
                     text-lg rounded-md w-[50px] h-[50px] items-center justify-center flex transition-colors
                     relative overflow-hidden" > {/* Added for ripple */}
          {theme === 'dark' ?
            <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        </button>

        <div className="flex flex-col text-light-text-primary dark:text-dark-text-primary">
          <AnimatedSection threshold={0.05}> {/* Intro might be visible quickly, lower threshold */}
            <Intro />
          </AnimatedSection>
          {/* Sections Container */}
          <div className="bg-light-bg dark:bg-dark-bg" >
            <AnimatedSection>
              <About />
            </AnimatedSection>
            <AnimatedSection>
              <Portfolio />
            </AnimatedSection>
            <AnimatedSection>
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
    </div>
  );
}

export default App;
