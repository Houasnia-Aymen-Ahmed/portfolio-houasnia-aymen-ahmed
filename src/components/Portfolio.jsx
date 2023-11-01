// eslint-disable-next-line no-unused-vars
import React from 'react';
import Pitem from './Pitem';
import { projects } from '../data';

const Portfolio = () => {
  return (
    <div id='Projects' className="flex flex-col md:flex-row items-center justify-center pt-10 px-6 md:px-12" >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {projects.map((project) =>
          <Pitem key={project.id} {...project} />
        )}
      </div>
    </div>
  )
}

export default Portfolio