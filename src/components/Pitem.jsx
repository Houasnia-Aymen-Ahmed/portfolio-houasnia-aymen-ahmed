/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { github, githubD } from "../assets";
import ProjectImage from "./ProjectImage";

const Pitem = React.memo(function Pitem({
  title,
  imgUrl,
  stack,
  link,
  description,
}) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [theme, setTheme] = useState("light");

  // Detect theme
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mq.matches ? "dark" : "light");
    const handler = (e) => setTheme(e.matches ? "dark" : "light");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Truncate description to approximately 60 characters (half of previous)
  const maxLength = 60;
  const shouldTruncate = description && description.length > maxLength;
  const truncatedDescription = shouldTruncate
    ? description.substring(0, maxLength).trim()
    : description;
  return (
    <>
      <motion.div
        className="flex flex-col md:min-w-[400px] min-w-[250px] h-[500px] border-2
                   border-slate-300 dark:border-slate-700
                   rounded-lg shadow-lg
                   hover:border-accent-primary dark:hover:border-accent-primary
                   overflow-hidden group bg-light-bg-alt dark:bg-dark-bg-alt
                   cursor-default"
        initial={{ scale: 1, rotateX: 0, rotateY: 0 }}
        whileHover={{
          scale: 1.02,
          rotateX: 1, // Reduced tilt
          rotateY: -1, // Reduced tilt
          boxShadow: "0px 5px 20px -2px var(--color-accent-primary)", // Accent glow
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }}
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
        // transition prop on the component itself for smooth exit from hover state
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Image Section - Takes up 50% of card height */}
        <div className="w-full h-[50%] overflow-hidden">
          <ProjectImage
            imgUrl={imgUrl}
            title={title}
            className="w-full h-full cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        {/* Content Section - Takes up 50% of card height */}
        <div className="w-full h-[50%] p-card flex flex-col justify-between">
          {/* Top Section: Title and Description */}
          <div>
            <h3
              className="text-h5 md:text-h4 text-light-text-primary dark:text-dark-text-primary mb-md md:mb-lg font-poppins font-semibold"
              style={{ textRendering: "optimizeLegibility" }}
            >
              {title}
            </h3>
            {description && (
              <p
                className="text-body-sm text-light-text-secondary dark:text-dark-text-secondary mb-lg font-inter leading-relaxed"
                style={{ textRendering: "optimizeLegibility" }}
              >
                {truncatedDescription}
                {shouldTruncate && (
                  <>
                    ...{" "}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowOverlay(true);
                      }}
                      className="text-accent-primary hover:text-accent-primary-darker underline cursor-pointer font-inter"
                    >
                      see more
                    </button>
                  </>
                )}
              </p>
            )}
          </div>
          {/* Bottom Section: Stack Tags and Buttons */}
          <div>
            <p className="flex flex-wrap gap-sm flex-row items-center justify-start text-caption md:text-body-sm font-inter mb-lg">
              {stack.map(
                (
                  item,
                  index // Added index for key, assuming item might not have unique id
                ) => (
                  <span
                    key={index} // Changed to index, ensure items are unique or have IDs if possible
                    className="inline-block px-sm py-xs font-semibold
                               border border-slate-400 dark:border-slate-600
                               text-light-text-secondary dark:text-dark-text-secondary
                               rounded-md group-hover:border-accent-primary group-hover:text-accent-primary transition-colors duration-300"
                  >
                    {item}
                  </span>
                )
              )}
            </p>
            {/* Action Buttons */}
            <div className="flex gap-sm">
              {link && link !== "#" && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-xs px-md py-xs bg-accent-primary hover:bg-accent-primary-darker text-white rounded-md transition-colors duration-200 text-body-sm font-inter"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={theme === "dark" ? githubD : github}
                    alt="GitHub"
                    className="w-4 h-4 hover:brightness-0 hover:invert transition-all duration-200"
                  />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Project Detail Overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-lg"
            onClick={() => setShowOverlay(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-light-bg-alt dark:bg-dark-bg-alt rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-card">
                {/* Header */}
                <div className="flex justify-between items-start mb-lg">
                  <h2 className="text-h3 font-poppins font-semibold text-light-text-primary dark:text-dark-text-primary">
                    {title}
                  </h2>
                  <button
                    onClick={() => setShowOverlay(false)}
                    className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors duration-200"
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="w-5 h-5 rotate-45"
                    />
                  </button>
                </div>

                {/* Project Image */}
                <div className="w-full h-80 mb-lg overflow-hidden rounded-lg">
                  <ProjectImage
                    imgUrl={imgUrl}
                    title={title}
                    className="w-full h-full"
                  />
                </div>

                {/* Full Description */}
                <div className="mb-lg">
                  <h3 className="text-h5 font-poppins font-semibold text-light-text-primary dark:text-dark-text-primary mb-md">
                    Description
                  </h3>
                  <p className="text-body text-light-text-secondary dark:text-dark-text-secondary font-inter leading-relaxed break-words whitespace-pre-wrap">
                    {description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-lg">
                  <h3 className="text-h5 font-poppins font-semibold text-light-text-primary dark:text-dark-text-primary mb-md">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-sm">
                    {stack.map((item, index) => (
                      <span
                        key={index}
                        className="inline-block px-sm py-xs font-semibold
                               border border-slate-400 dark:border-slate-600
                               text-light-text-secondary dark:text-dark-text-secondary
                               rounded-md text-body-sm font-inter"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-sm">
                  {link && link !== "#" && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-xs px-lg py-md bg-accent-primary hover:bg-accent-primary-darker text-white rounded-md transition-colors duration-200 text-body font-inter"
                    >
                      <img
                        src={theme === "dark" ? githubD : github}
                        alt="GitHub"
                        className="w-5 h-5 hover:brightness-0 hover:invert transition-all duration-200"
                      />
                      <span>View on GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});
export default Pitem;
