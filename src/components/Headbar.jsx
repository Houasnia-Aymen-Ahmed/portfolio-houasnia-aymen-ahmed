// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import { myPic} from '../assets';
import { socialMedia } from '../data';
import { headbarItems } from '../data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Headbar = () => {

  return (
    <header id='Headbar'>
      <div className="flex flex-col" >
        <div>
          <a href="#" className=" bg-[#25040B] no-underline" >
          <img src={myPic} alt="personal picture" className=" my-[15px] mx-auto block w-[120px] border-[8px] border-solid border-someBlack hover:border-[#aa8ea0] rounded-[50%] max-w-[100%] h-auto align-middle "/>
          </a>
          <h1 className="text-center text-[24px] m-0 p-0 font-semibold font-poppins" >
            <a href="" className="text-white no-underline" > Housania Aymen Ahmed</a>
          </h1>
          <div className="flex flex-wrap justify-center gap-3 mt-[1rem] ">
          {socialMedia.map((social)=> (
            <a key={social.id} href={social.link} className="p-2 bg-someBlack hover:bg-[#DFA8B4] inline-flex items-center
            rounded-[35%] transition-all ease-in duration-300 ">
              <img className="w-[23px] h-[23px] " key={social.id} src={social.icon2} alt={social.id} />
            </a>
            ))}
          </div>
        </div>
        <nav className="px-0 py-[3rem] text-[#65656b]" >
          <ul className="m-0 p-0 flex flex-col gap-2 w-full" >
              {headbarItems.map((item) =>
                <li key={item.id}>
                  <a href={item.ref} className='flex flex-row justify-start items-center h-[40px] pl-2 group'>
                    <p className="flex w-[30px]" >
                      <FontAwesomeIcon icon={item.icon} className="group-hover:text-[#DFA8B4] transition-colors duration-300" />
                    </p>
                    <p className='group-hover:text-white '>{item.title}</p>
                  </a>
                </li>
              )} 
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Headbar