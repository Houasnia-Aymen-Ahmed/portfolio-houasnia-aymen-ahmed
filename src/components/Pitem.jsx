/* eslint-disable react/prop-types */
import React from "react"; // Removed unused var comment

const Pitem = React.memo(({ title, imgUrl, stack, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col md:min-w-[400px] min-w-[250px] border-2
               border-slate-300 dark:border-slate-700
               rounded-lg shadow-lg hover:shadow-2xl
               hover:border-accent-primary dark:hover:border-accent-primary
               transform hover:scale-[1.02]
               transition-all ease-in-out duration-300 overflow-hidden group bg-light-bg-alt dark:bg-dark-bg-alt"
  >
    <div className="w-full h-36 md:h-48 overflow-hidden"> {/* Container for image to control its size and overflow if needed */}
      <img
        src={imgUrl}
        alt={title || "Project image"} // Add title to alt text for better accessibility
        loading="lazy" // Added lazy loading
        className="w-full h-full object-cover cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105" // Slight zoom on image itself
      />
    </div>
    <div className="w-full p-4 flex flex-col flex-grow"> {/* flex-grow to make this part expand */}
      <h3 className="text-lg md:text-xl text-light-text-primary dark:text-dark-text-primary mb-2 md:mb-3 font-semibold">
        {title}
      </h3>
      <div className="flex-grow"> {/* Pushes stack to bottom if card heights vary and items are aligned top */}
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
          {stack.map((item, index) => ( // Added index for key, assuming item might not have unique id
            <span
              key={index} // Changed to index, ensure items are unique or have IDs if possible
              className="inline-block px-2 py-1 font-semibold
                         border border-slate-400 dark:border-slate-600
                         text-light-text-secondary dark:text-dark-text-secondary
                         rounded-md group-hover:border-accent-primary group-hover:text-accent-primary transition-colors duration-300"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  </a>
);

export default Pitem;
