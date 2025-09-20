import { myPic} from '../assets';
import { socialMedia } from '../data';
import { headbarItems } from '../data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';

const Headbar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mq.matches ? 'dark' : 'light');
    const handler = (e) => setTheme(e.matches ? 'dark' : 'light');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <header id='Headbar'>
      <div className="flex flex-col pt-8"> {/* Added some padding top */}
        <div className="text-center"> {/* Centering container */}
          <a href="#" className="no-underline">
            <img
              src={myPic}
              alt="Houasnia Aymen Ahmed"
              loading="lazy" // Added lazy loading
              className="my-[15px] mx-auto block w-[120px] h-[120px] object-cover border-[6px] border-solid
                         border-slate-300 dark:border-slate-700 hover:border-accent-primary
                         rounded-full transition-colors duration-300"/>
          </a>
          <h1 className="text-[22px] m-0 p-0 font-semibold font-poppins">
            <a href="#" className="text-light-text-primary dark:text-dark-text-primary hover:text-accent-primary no-underline transition-colors duration-300">
              Houasnia Aymen Ahmed
            </a>
          </h1>
          <div className="flex flex-wrap justify-center gap-3 mt-4 mb-8"> {/* Added mb-8 for spacing before nav */}
            {socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank" // Open social links in new tab
                rel="noopener noreferrer" // Security for target="_blank"
                className="p-2 bg-slate-200 dark:bg-slate-700 hover:bg-accent-primary
                           inline-flex items-center rounded-full
                           transition-all ease-in duration-300 group">
                <img
                  className="w-[23px] h-[23px] group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  src={theme === 'dark' ? social.icon2 : social.icon}
                  alt={social.id} />
              </a>
            ))}
          </div>
        </div>
        <nav className="px-0 text-light-text-secondary dark:text-dark-text-secondary">
          <ul className="m-0 p-0 flex flex-col gap-1 w-full"> {/* Reduced gap slightly */}
            {headbarItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.ref}
                  className='flex flex-row justify-start items-center h-[44px] px-3 group
                             rounded-md hover:bg-slate-200 dark:hover:bg-slate-700
                             hover:text-accent-primary transition-all duration-200 ease-in-out'>
                  <span className="flex w-[30px] items-center justify-center text-lg mr-2"> {/* Ensure icon is centered and sized */}
                    <FontAwesomeIcon icon={item.icon} className="transition-colors duration-200" /> {/* Group hover will handle color */}
                  </span>
                  <span className='transition-colors duration-200'>{item.title}</span> {/* Group hover will handle color */}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Headbar