// eslint-disable-next-line no-unused-vars
import React from 'react'
import { socialMedia } from '../data';

// eslint-disable-next-line react/prop-types
const Footer = ({theme}) => {
  return (
    <div className="py-5 text-center">
      <div className="container max-w-screen-lg mx-auto">
				<div>
					<div className="flex flex-wrap justify-center gap-2">            
            {socialMedia.map((social)=> (
            <a key={social.id} href={social.link} className="bg-black dark:bg-white p-2 font-semibold text-white inline-flex items-center rounded-[10px] dark:hover:bg-blue-400 hover:bg-blue-900 transition-colors duration-300 ">
              <img className="w-[27px] h-[27px] " key={social.id} src={theme === 'dark' ? social.icon : social.icon2} alt={social.id} />
            </a>
            ))}
					</div>
				</div>
			</div>
			<p className="text-sm mt-2 text-black dark:text-white  opacity-75">
				&copy; {new Date().getFullYear()} Houasnia Aymen Ahmed All rights reserved.
			</p>
		</div>
  )
}

export default Footer
