/* eslint-disable react/prop-types */
import React from 'react'; // Removed unused var comment

const TimelineItem = React.memo(function TimelineItem({ year, title, duration, details }) { // Wrapped with React.memo
   return (
      <ol className="flex flex-col md:flex-row relative border-l border-slate-300 dark:border-slate-700">
         <li className="mb-10 ml-6"> {/* Increased ml for more space from the line */}
            <div className="absolute w-3 h-3 bg-slate-300 rounded-full mt-1.5 -left-[7px] border border-light-bg dark:border-dark-bg dark:bg-slate-700" /> {/* Adjusted left position for thicker dot */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 flex-row items-center justify-start text-xs md:text-sm mb-1"> {/* Added mb-1 */}
               <span className="inline-block px-2 py-1 font-semibold text-light-bg dark:text-dark-bg bg-light-text-primary dark:bg-dark-text-primary rounded-md">
                  {year}
               </span>
               <h3 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary">
                  {title}
               </h3>
               <div className="my-1 text-sm font-normal leading-none text-light-text-secondary dark:text-dark-text-secondary">
                  {duration}
               </div>
            </div>
            <p className="my-2 text-base font-normal text-light-text-secondary dark:text-dark-text-secondary leading-relaxed"> {/* Added leading-relaxed */}
               {details}
            </p>
         </li>
      </ol>
   )
}

export default TimelineItem;