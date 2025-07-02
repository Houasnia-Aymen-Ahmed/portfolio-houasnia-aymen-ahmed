import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options) => {
  const [entry, setEntry] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([firstEntry]) => {
        setEntry(firstEntry);
        setIsIntersecting(firstEntry.isIntersecting);
      },
      { ...options }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]); // Re-run effect if options change

  // Re-observe if the element reference changes (though less common for simple cases)
  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement && entry && entry.target) { // If element was unmounted and re-mounted
        const observer = new IntersectionObserver(
            ([firstEntry]) => {
              setEntry(firstEntry);
              setIsIntersecting(firstEntry.isIntersecting);
            },
            { ...options }
          );
        observer.observe(entry.target); // Should be currentElement if it exists
        return () => observer.unobserve(entry.target);
    }
  }, [elementRef, entry, options])


  return [elementRef, isIntersecting, entry];
};

export default useIntersectionObserver;
