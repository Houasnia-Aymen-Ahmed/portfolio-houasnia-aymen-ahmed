// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useReducer } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Resume, Footer, Portfolio, Intro, Timeline, Headbar, About } from "./components";
import { bgImage } from './assets';

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
    <div className='flex'>
      <div className={`bg-black z-[9997] top-0 bottom-0 w-[300px] min-h-screen fixed md:fixed md:left-0 font-inter ${theme === 'dark' ? 'dark' : ''} md:block ${isHeaderVisible ? 'left-[-300px]' : 'left-0'} transition-all ease-in-out duration-500 py-0 px-[15px] overflow-y-auto `}>
        <Headbar />
      </div>
      <div className=" flex-1 w-[50px] md:w-full h-full bg-no-repeat bg-auto xl:bg-contain " style={{ backgroundImage: backgroundImageUrl }}>
        <button
          className="fixed p-2 z-[9999] right-20 top-4 bg-[#F574AD] text-lg rounded-md w-[50px] h-[50px] items-center justify-center md:hidden flex"
          onClick={toggleHeader}>
          {!isHeaderVisible ? <FontAwesomeIcon icon={faClose}
            className="text-[#130206] dark:text-white" /> : <FontAwesomeIcon icon={faBars}
              className="text-[#130206] dark:text-white " />}
        </button>
        <button type="button" onClick={handleThemeSwitch} className="fixed p-2 z-[9999] right-5 top-4 bg-[#F574AD] text-lg rounded-md w-[50px] h-[50px]">
          {theme === 'dark' ?
            <FontAwesomeIcon className='text-white inline-flex' icon={faSun} /> : <FontAwesomeIcon className='text-black' icon={faMoon} />}
        </button>
        <div className="flex flex-col md:ml-[300px] text-stone-900 dark:text-stone-300 font-inter ">
          <Intro />
          <div className="bg-white dark:bg-[#130206]" >
            <About />
            <Portfolio />
            <Timeline />
            <Resume />
            <Footer theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
