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
            <div>
               <img src={cvImage} alt="Image Preview" className=" w-full object-cover border-2 rounded-[5%] border-stone-900 " />
            </div>
         </div>
         <div id='Contact' className="flex flex-col w-full md:flex-1 md:self-end ">
            <Contact></Contact>
         </div>
      </div>
   )
}

export default Resume