// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import InteractiveCube from './InteractiveCube'; // Import the cube

const Intro = () => {
  return (
      // Changed items-end to items-center for overall vertical centering if content is less than screen height
      // Added justify-center to center content horizontally and vertically within the screen
      <div id='Home' className="flex flex-col justify-center items-center h-screen m-0 p-0 text-light-text-primary dark:text-dark-text-primary text-center">
        {/* Main content wrapper for text and cube */}
        <div className='max-w-7xl w-11/12 mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12'>
          {/* Text content */}
          <div className='flex flex-col items-center md:items-start text-center md:text-left'>
            <p className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-3 font-medium'>I&apos;m a
              <span className="font-bold text-accent-primary dark:text-accent-primary">
                <Typewriter words={[' Developer', 'n Engineer', ' Freelancer']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={500}
                />
              </span>
            </p>
            {/* Optional: Add a short tagline or intro sentence here if desired */}
            <p className="text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-md">
              Crafting digital experiences with code and creativity. Welcome to my portfolio.
            </p>
          </div>

          {/* Interactive Cube */}
          <div className="mt-8 md:mt-0">
            <InteractiveCube />
          </div>
        </div>

        {/* Quote - kept it, but styling might need adjustment based on new layout */}
        <i className='absolute bottom-10 flex flex-col w-[85%] md:w-[60%] lg:w-[50%] px-[1rem] md:px-[2rem] text-[0.75rem] sm:text-sm md:text-base text-light-text-secondary dark:text-dark-text-secondary'>
          <span className='self-start'>
            &quot;If you had to do something, do it perfectly.
          </span>
          <span className='self-end mt-1'> {/* Added mt-1 for slight separation */}
            And once you start it, you better finish it.&quot;
          </span>
        </i>
      </div>
  )
}

export default Intro
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={500}
              />
            </span>
          </p>
        </div>
        <i className='flex flex-col w-[85%] md:w-[50%] px-[2rem] md:px-[5rem] text-[0.8rem] md:text-2xl mb-10 '>
          <span className='self-start'>
            &quot; If you had to do something, do it pefectly
          </span>
          <span className='self-end'>
            And once you start it, you better finish it. &quot;
          </span>
        </i>
      </div>
  )
}

export default Intro