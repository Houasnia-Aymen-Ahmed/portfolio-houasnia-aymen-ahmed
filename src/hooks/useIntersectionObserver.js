import { useEffect } from 'react';

const useIntersectionObserver = (callback, options, refs) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const currentRefs = refs.current;

    currentRefs.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      currentRefs.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [callback, options, refs]);
};

export default useIntersectionObserver;
