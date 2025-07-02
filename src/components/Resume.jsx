// eslint-disable-next-line no-unused-vars
import React from 'react'
import Title from './Title'
import { cvImage } from '../assets';
import Contact from './Contact';

const Resume = () => {
   return (
      <div id='Resume' className='flex flex-col items-center md:flex-row gap-5 mb-10 mx-auto pt-10 pb-6 px-6 md:px-12 overflow-hidden' >
         <div className="flex flex-col md:w-[50%]">
            <Title>Resume</Title>
            <div className="shadow-xl rounded-lg overflow-hidden">
               <img src={cvImage} alt="Resume Preview" className="w-full object-cover border-2 rounded-lg border-slate-300 dark:border-slate-700" loading="lazy" />
            </div>
         </div>
         <div id='Contact' className="flex flex-col w-full md:flex-1 md:self-start md:pt-12 mt-8 md:mt-0"> {/* Adjusted self-alignment and spacing */}
            <Contact></Contact>
         </div>
      </div>
   )
}

export default Resume