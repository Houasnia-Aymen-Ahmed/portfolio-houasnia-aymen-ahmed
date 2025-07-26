import Title from "./Title";
import TimelineItem from "./TimelineItem";
import { timeline } from "../data";
import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const titleVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Timeline = () => {
  const [activeNode, setActiveNode] = useState(0);
  const nodeRefs = useRef([]);

  const observerCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  }, []);

  const observerOptions = {
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0,
  };

  useIntersectionObserver(observerCallback, observerOptions, nodeRefs);

  return (
    <motion.div
      id="Timeline"
      className="pt-20 pb-6 px-6 md:px-12 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        variants={titleVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {" "}
        {/* Ensure title also animates */}
        <Title>Timeline</Title>
      </motion.div>
      {timeline.map((item) => (
        <motion.div key={item.id} variants={itemVariant}>
          {" "}
          {/* Key on motion.div */}
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
export default Timeline;
