// eslint-disable-next-line no-unused-vars
import React from 'react';
import Title from './Title';
import { timeline } from '../data';
import TimelineNode from './TimelineNode';
import { motion } from 'framer-motion'; // Import motion
import { useState, useEffect, useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const titleVariant = { // Separate variant for title for a different effect if desired
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};


const Timeline = () => {
  const [activeNode, setActiveNode] = useState(0);
  const nodeRefs = useRef([]);

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.dataset.index, 10);
        setActiveNode(index);
      }
    });
  };

  const observerOptions = {
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  };

  useIntersectionObserver(observerCallback, observerOptions, nodeRefs);

  return (
<motion.div
  id='Timeline'
  className='pt-20 pb-6 px-6 md:px-12 overflow-hidden'
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
       <motion.div variants={titleVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}> {/* Ensure title also animates */}
        <Title>Timeline</Title>
      </motion.div>
      <div className="flex flex-col">
        {timeline.map((item, index) => (
          <div key={item.title} ref={el => nodeRefs.current[index] = el} data-index={index}>
            <TimelineNode
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
              isActive={index === activeNode}
              onClick={() => {
                nodeRefs.current[index].scrollIntoView({
                  behavior: 'smooth',
                  block: 'center'
                });
              }}
            />
          </div>
        ))}
      </div>
</motion.div>
  )
}

export default Timeline