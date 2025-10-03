import { motion } from "framer-motion";
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
  AnimatedSection,
  BackgroundPattern,
  ThemeToggle,
  MobileMenuButton,
  CursorEffect,
} from "./components";
import { useTheme, useScroll, useResponsive } from "./hooks";

const App = () => {
  // Custom hooks for optimized state management
  const { theme, toggleTheme } = useTheme();
  const { mainVariants } = useScroll();
  const { isHeaderVisible, toggleHeader } = useResponsive();

  // Prevent flash of unstyled content
  if (!theme) {
    return null;
  }

  return (
    <ErrorBoundary>
      <CursorEffect />
      <Chatbot handleThemeSwitch={toggleTheme} />

      <motion.div
        className="flex font-inter"
        initial="hidden"
        animate="visible"
        variants={mainVariants}
      >
        {/* Sidebar */}
        <motion.div
          className={`z-[9997] top-0 bottom-0 w-[300px] min-h-screen fixed bg-light-bg-alt dark:bg-dark-bg-alt py-0 px-[15px] shadow-lg
                     transform transition-transform duration-300 ease-in-out
                     ${isHeaderVisible ? "translate-x-0" : "-translate-x-full"}
                     md:translate-x-0`}
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

        {/* Main content area */}
        <div className="flex-1 w-full max-w-screen overflow-x-hidden relative md:ml-[300px]">
          <BackgroundPattern theme={theme} />

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

      {/* Theme Toggle Button */}
      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      {/* Mobile Menu Button */}
      <MobileMenuButton
        isHeaderVisible={isHeaderVisible}
        onToggle={toggleHeader}
      />
    </ErrorBoundary>
  );
};

export default App;