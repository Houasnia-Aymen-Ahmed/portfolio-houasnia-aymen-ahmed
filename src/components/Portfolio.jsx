import Pitem from "./Pitem";
import { projects } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { createRipple } from '../utils/rippleEffect'; // Import createRipple
import { motion } from 'framer-motion'; // Import motion

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Portfolio = () => {
  const slideLeft = () => {
    const slider = document.getElementById("Projects");
    if (slider) slider.scrollLeft -= 500;
  };
  const slideRight = () => {
    const slider = document.getElementById("Projects");
    if (slider) slider.scrollLeft += 500;
  };

  const SliderButton = ({ direction, onClick }) => (
    <button
      type="button"
      onClick={(e) => { onClick(); createRipple(e); }}
      aria-label={direction === 'left' ? 'Scroll left' : 'Scroll right'}
      className={`absolute ${direction === 'left' ? 'left-0 ml-2 md:ml-3' : 'right-0 mr-2 md:mr-3'}
                 cursor-pointer
                 text-light-text-primary dark:text-dark-text-primary
                 bg-light-bg-alt/70 dark:bg-dark-bg-alt/70
                 hover:bg-accent-primary hover:text-white dark:hover:text-white
                 w-[40px] h-[40px] p-0 flex items-center justify-center rounded-full shadow-md
                 opacity-70 hover:opacity-100
                 transition-all duration-300 ease-in-out z-10
                 relative overflow-hidden`} // Added p-0, flex items-center justify-center, relative, overflow-hidden
    >
      <FontAwesomeIcon icon={direction === 'left' ? faChevronLeft : faChevronRight} className="w-[18px] h-[18px]" />
    </button>
  );

  return (
    <div className="flex items-center relative"> {/* Added relative for absolute positioning of buttons */}
      <SliderButton direction="left" onClick={slideLeft} />
      <div
        id="Projects"
        className="w-full h-full flex overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth items-stretch pt-10 pb-5 px-2"
      >
        <div id="Slider" className="flex gap-5 py-2"> {/* This div is part of the scroll container, children will be motion items */}
          {projects.map((project) => (
            <motion.div
              key={project.id} // Key on the motion component
              variants={itemVariant}
              // className="h-full" // Add if Pitem needs to fill height; Pitem itself should handle its dimensions.
                                  // The items-stretch on parent #Projects div should make these motion.divs stretch.
            >
              <Pitem id="Pitem" {...project} />
            </motion.div>
          ))}
        </div>
      </div>
      <SliderButton direction="right" onClick={slideRight} />
    </div>
  );
};

export default Portfolio;
