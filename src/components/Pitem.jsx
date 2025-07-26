/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion"; // Import motion

const Pitem = React.memo(function Pitem({ title, imgUrl, stack, link }) {
  return (
    <motion.a // Changed to motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col md:min-w-[400px] min-w-[250px] border-2
                 border-slate-300 dark:border-slate-700
                 rounded-lg shadow-lg
                 hover:border-accent-primary dark:hover:border-accent-primary
                 overflow-hidden group bg-light-bg-alt dark:bg-dark-bg-alt
                 cursor-none" // cursor-none because we have a custom cursor
      initial={{ scale: 1, rotateX: 0, rotateY: 0 }}
      whileHover={{
        scale: 1.03,
        rotateX: 2, // Subtle tilt
        rotateY: -2, // Subtle tilt
        boxShadow: "0px 5px 20px -2px var(--color-accent-primary)", // Accent glow
        transition: { type: "spring", stiffness: 300, damping: 15 }
      }}
      // transition prop on the component itself for smooth exit from hover state
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Removed Tailwind transform, hover:shadow-2xl, hover:scale, transition-all as Framer Motion handles this */}
      <div className="w-full h-36 md:h-48 overflow-hidden">
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
    </motion.a>
  );
});
export default Pitem;
