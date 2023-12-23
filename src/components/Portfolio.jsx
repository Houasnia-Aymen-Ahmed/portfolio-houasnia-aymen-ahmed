import Pitem from "./Pitem";
import { projects } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  const slideLeft = () => {
    const slider = document.getElementById("Projects");
    slider.scrollLeft -= 500;
  };
  const slideRight = () => {
    const slider = document.getElementById("Projects");
    slider.scrollLeft += 500;
  };

  return (
    <div className=" flex items-center ">
      <FontAwesomeIcon
        icon={faChevronLeft}
        onClick={slideLeft}
        className="absolute ml-3 w-[30px] h-[30px] opacity-50 hover:opacity-100 hover:bg-slate-900 bg-slate-700 py-10 z-[9999] rounded-xl"
      />
      <div
        id="Projects"
        className={` w-full h-full flex overflow-x-scroll scrollbar-hide whitespace-nowrap scroll-smooth items-start pt-10`}
      >
        <div id="Slider" className="flex gap-4 py-2 rounded-lg">
          {projects.map((project) => (
            <Pitem id="Pitem" key={project.id} {...project} />
          ))}
        </div>
      </div>
      <FontAwesomeIcon
        icon={faChevronRight}
        onClick={slideRight}
        className="absolute mr-3 right-0 w-[30px] h-[30px] opacity-50 hover:opacity-100 hover:bg-slate-900 bg-slate-700 py-10 z-[9999] rounded-xl"
      />
    </div>
  );
};

export default Portfolio;
