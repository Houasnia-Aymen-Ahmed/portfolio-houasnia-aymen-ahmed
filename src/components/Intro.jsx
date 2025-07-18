// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion'; // Import motion

// Removed InteractiveCube import

const textRevealVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ // Accept custom delay index 'i'
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
      delay: i * 0.1, // Stagger delay based on index
    },
  }),
};

const Intro = () => {
  const [reduceMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  return (
      <div id='Home' className="aurora-bg flex flex-col justify-center items-center h-screen m-0 p-0 text-light-text-primary dark:text-dark-text-primary text-center overflow-hidden"> {/* Added overflow-hidden */}
        {/* Main content wrapper for text */}
        <div className='max-w-4xl w-11/12 mx-auto flex flex-col items-center justify-center'> {/* Simplified layout, removed md:flex-row and gap for cube */}
          {/* Text content */}
          <motion.div
            className='flex flex-col items-center text-center'
            initial={!reduceMotion ? "hidden" : false}
            animate={!reduceMotion ? "visible" : false}
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }} // Stagger children animation
          >
            <motion.p
              className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-3 font-medium'
              variants={textRevealVariant}
              custom={0} // Stagger index
            >
              I&apos;m a
              <motion.span
                className="font-bold text-accent-primary dark:text-accent-primary"
                // variants={textRevealVariant} // Can animate this span separately if needed
                // custom={1}
              >
                <Typewriter words={[' Developer', 'n Engineer', ' Freelancer']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000} // Increased delay before re-typing
                />
              </motion.span>
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-md mt-4"
              variants={textRevealVariant}
              custom={1} // Stagger index, appears after "I'm a"
            >
              Crafting digital experiences with code and creativity. Welcome to my portfolio.
            </motion.p>
          </motion.div>
          {/* Cube placeholder removed */}
        </div>

        {/* Quote */}
        {/* Also animate the quote */}
        <motion.i
          className='absolute bottom-10 flex flex-col w-[85%] md:w-[60%] lg:w-[50%] px-[1rem] md:px-[2rem] text-[0.75rem] sm:text-sm md:text-base text-light-text-secondary dark:text-dark-text-secondary'
          initial={!reduceMotion ? { opacity: 0, y: 20 } : false}
          animate={!reduceMotion ? { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.7 } } : false} // Delay it more
        >
          <span className='self-start'>
            &quot;If you had to do something, do it perfectly.
          </span>
          <span className='self-end mt-1'> {/* Added mt-1 for slight separation */}
            And once you start it, you better finish it.&quot;
          </span>
        </motion.i>
      </div>
  )
}

export default Intro