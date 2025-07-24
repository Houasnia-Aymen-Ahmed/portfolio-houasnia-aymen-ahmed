import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const TimelineNode = ({ year, title, duration, details, isActive, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <div
      ref={ref}
      className="flex items-start mb-10 cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <motion.div
        className="w-4 h-4 rounded-full mt-1"
        style={{
          backgroundColor: isActive ? 'var(--color-accent-primary)' : 'var(--color-gray-400)',
          y,
        }}
        whileHover={{ scale: 1.5 }}
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary">{title}</h3>
        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{year} - {duration}</p>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 overflow-hidden"
            >
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{details}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TimelineNode;
