import { PersonalPicture } from "../assets";
import { socialMedia, headbarItems } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import SocialMediaButtons from "./SocialMediaButton";

const Headbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mq.matches ? "dark" : "light");
    const handler = (e) => setTheme(e.matches ? "dark" : "light");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <header id="Headbar" className="h-screen flex flex-col">
      <div className="flex flex-col pt-6 pb-4 h-full">
        {/* Profile Section - Fixed height */}
        <div className="text-center flex-shrink-0">
          <a href="#" className="no-underline">
            <img
              src={PersonalPicture}
              alt="Houasnia Aymen Ahmed"
              loading="lazy"
              className="my-3 mx-auto block w-[100px] h-[100px] object-cover border-[4px] border-solid
                         border-slate-300 dark:border-slate-700 hover:border-accent-primary
                         rounded-full transition-colors duration-300"
            />
          </a>
          <h1 className="text-h6 m-0 p-0 font-semibold font-poppins">
            <a
              href="#"
              className="text-light-text-primary dark:text-dark-text-primary hover:text-accent-primary no-underline transition-colors duration-300"
            >
              Houasnia Aymen Ahmed
            </a>
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mt-3 mb-4">
            <SocialMediaButtons size="20" />
          </div>
        </div>

        {/* Navigation Section - Takes remaining space */}
        <nav className="px-0 text-light-text-primary dark:text-dark-text-primary flex-1 flex flex-col justify-start">
          <ul className="m-0 p-0 flex flex-col gap-1 w-full">
            {headbarItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.ref}
                  className="flex flex-row justify-start items-center h-[40px] px-3 group
                             rounded-md hover:bg-nav-bg-light dark:hover:bg-nav-bg-dark
                             hover:text-nav-hover transition-all duration-200 ease-in-out"
                >
                  <span className="flex w-[28px] items-center justify-center text-base mr-3">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="transition-colors duration-200"
                    />
                  </span>
                  <span className="transition-colors duration-200 text-sm">
                    {item.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Headbar;
