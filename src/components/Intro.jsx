import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion"; // Import motion

// Removed InteractiveCube import

const textRevealVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    // Accept custom delay index 'i'
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: i * 0.1, // Stagger delay based on index
    },
  }),
};

const Intro = () => {
  const [reduceMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  return (
    <div
      id="Home"
      className="aurora-bg relative flex flex-col min-h-screen text-light-text-primary dark:text-dark-text-primary text-center overflow-hidden"
    >
      {/* Main content wrapper for text */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-4xl w-11/12 mx-auto flex flex-col space-y-20">
          {" "}
          {/* Simplified layout, removed md:flex-row and gap for cube */}
          {/* Text content */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? false : "visible"}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }} // Stagger children animation
          >
            <motion.p
              className="text-display sm:text-display-sm md:text-display lg:text-display mb-3 font-poppins"
              variants={textRevealVariant}
              custom={0} // Stagger index
            >
              I&apos;m
              <motion.span
                className="font-bold text-accent-primary dark:text-accent-primary"
                // variants={textRevealVariant} // Can animate this span separately if needed
                // custom={1}
              >
                <Typewriter
                  words={[" a Developer", " an Engineer", " a Freelancer"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000} // Increased delay before re-typing
                />
              </motion.span>
            </motion.p>
            <motion.p
              className="text-body-lg md:text-h5 text-light-text-secondary dark:text-dark-text-secondary max-w-md mt-4 font-inter"
              variants={textRevealVariant}
              custom={1} // Stagger index, appears after "I'm a"
            >
              Crafting digital experiences with code and creativity. Welcome to
              my portfolio.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <motion.blockquote
        className="flex flex-col w-[85%] md:w-[60%] lg:w-[50%] mx-auto text-caption sm:text-body-sm md:text-body text-light-text-secondary dark:text-dark-text-secondary font-inter"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={
          reduceMotion
            ? false
            : { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.7 } }
        }
      >
        <span className="self-start">
          &quot;If you had to do something, do it perfectly.&quot;
        </span>
        <span className="self-end mt-1">
          &quot;And once you start it, you better finish it.&quot;
        </span>
      </motion.blockquote>
    </div>
  );
};

export default Intro;
