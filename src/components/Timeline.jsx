// eslint-disable-next-line no-unused-vars
import React from 'react';
import Title from './Title';
import { timeline } from '../data';
import TimelineItem from './TimelineItem';
import { motion } from 'framer-motion'; // Import motion

const itemVariant = {
  hidden: { opacity: 0, x: -50 }, // Slide from left
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const titleVariant = { // Separate variant for title for a different effect if desired
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};


const Timeline = () => {
  // The parent <AnimatedSection> in App.jsx will have staggerChildren={0.1}
  // So each direct motion child here (Title wrapper, and each TimelineItem wrapper) will be staggered.
  return (
    <div id='Timeline' className='pt-20 pb-6 px-6 md:px-12 overflow-hidden'>
       <motion.div variants={titleVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}> {/* Ensure title also animates */}
        <Title>Timeline</Title>
      </motion.div>
      {timeline.map(item => (
        <motion.div key={item.id} variants={itemVariant}> {/* Key on motion.div */}
          <TimelineItem
            // key={item.id} // Key is now on the motion component
            year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
          />
        </motion.div>
      ))}
    </div>

  )
}

export default Timeline