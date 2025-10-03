/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion"; // Import motion

const lineVariant = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 }, // Delay slightly for item to appear
  },
};

const dotVariantAlt = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.7 },
  }, // Delay dot after line
};

const contentVariant = {
  // For text content fade-in
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.8 },
  }, // Delay after dot
};

const TimelineItem = React.memo(function TimelineItem({
  year,
  title,
  duration,
  details,
}) {
  // The parent motion.div in Timeline.jsx handles the overall item's appearance (e.g., slide-in from left).
  // This component will handle animations of its internal parts: the line segment, the dot, and content.
  return (
    <ol className="flex flex-col md:flex-row relative">
      {" "}
      {/* Static container, no border-l here */}
      {/* This li will be the reference for absolute positioning of line and dot */}
      <li className="mb-10 ml-6 relative pl-4">
        {" "}
        {/* Added pl-4 to give space for line and dot */}
        {/* Static background line segment (track) - this will be behind the animated line */}
        <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-slate-300 dark:bg-slate-700" />
        {/* Animated line segment */}
        <motion.div
          className="absolute top-0 bottom-0 left-0 w-[2px] bg-accent-primary"
          style={{ originY: 0 }} // Animate scaleY from the top
          variants={lineVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        />
        {/* Animated Dot */}
        <motion.div
          className="absolute w-4 h-4 bg-accent-primary rounded-full mt-1 top-0 -left-[7px] border-2 border-light-bg dark:border-dark-bg flex items-center justify-center"
          // Adjusted dot size (w-4, h-4) and positioning (-left-[7px]) to sit on the 2px line
          variants={dotVariantAlt}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Optional: inner smaller dot */}
          <div className="w-2 h-2 bg-light-bg dark:bg-dark-bg rounded-full"></div>
        </motion.div>
        {/* Content, also animated */}
        <motion.div
          variants={contentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-wrap gap-x-4 gap-y-1 flex-row items-center justify-start text-caption md:text-body-sm mb-1 font-inter">
            <span className="inline-block px-2 py-1 font-semibold text-light-bg dark:text-dark-bg bg-light-text-primary dark:bg-dark-text-primary rounded-md">
              {year}
            </span>
            <h3 className="text-h5 font-poppins font-semibold text-light-text-primary dark:text-dark-text-primary">
              {title}
            </h3>
            <div className="my-1 text-body-sm font-normal leading-none text-light-text-secondary dark:text-dark-text-secondary">
              {duration}
            </div>
          </div>
          <p className="my-2 text-body font-normal text-light-text-secondary dark:text-dark-text-secondary leading-relaxed font-inter">
            {" "}
            {/* Added leading-relaxed */}
            {details}
          </p>
        </motion.div>
      </li>
    </ol>
  );
}); // Added closing parenthesis and semicolon for React.memo

export default TimelineItem;
