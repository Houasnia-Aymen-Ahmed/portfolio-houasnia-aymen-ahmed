// eslint-disable-next-line no-unused-vars
import React from 'react';
import Title from './Title';
import { timeline } from '../data';
import TimelineItem from './TimelineItem';
const Timeline = () => {
  return (
    <div id='Timeline' className='pt-20 pb-6 px-6 md:px-12 overflow-hidden'>
      <Title>Timeline</Title>
      {timeline.map(item => (
        <TimelineItem
          key={item.id}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>

  )
}

export default Timeline