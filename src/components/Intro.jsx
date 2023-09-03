// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter';

const Intro = () => {
  return (
      <div id='Home' className="flex flex-col justify-between items-end h-screen m-0 p-0 text-white ">
        <div className=' max-w-7xl w-11/12 mx-auto flex flex-col items-start text-center mt-44'>
          <p className='text-2xl md:text-7xl mb-3 font-medium' >I&apos;m a
            <span className="font-bold" >
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