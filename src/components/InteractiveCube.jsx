import React, { useEffect, useRef } from 'react';

const InteractiveCube = () => {
  const cubeRef = useRef(null);

  // Optional: Mouse interaction for rotation - can be added later
  // useEffect(() => {
  //   const cube = cubeRef.current;
  //   if (!cube) return;
  //
  //   const handleMouseMove = (event) => {
  //     const rect = cube.parentElement.getBoundingClientRect(); // Get bounds of parent or a defined area
  //     const x = event.clientX - rect.left;
  //     const y = event.clientY - rect.top;
  //     const rotateY = (x / rect.width - 0.5) * 30; // Max rotation 15deg
  //     const rotateX = (0.5 - y / rect.height) * 30; // Max rotation 15deg
  //     cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  //   };
  //
  //   const parentElement = cube.parentElement; // Or document.body or a specific section
  //   parentElement.addEventListener('mousemove', handleMouseMove);
  //
  //   return () => {
  //     parentElement.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  const faceSymbols = ['{}', '</>', '=>', 'λ', '∀', '∃']; // Example symbols

  return (
    <div className="scene w-32 h-32 md:w-40 md:h-40"> {/* Container for perspective */}
      <div ref={cubeRef} className="cube relative w-full h-full">
        {/* Front */}
        <div className="cube__face cube__face--front absolute w-full h-full flex items-center justify-center text-3xl md:text-4xl">
          {faceSymbols[0]}
        </div>
        {/* Back */}
        <div className="cube__face cube__face--back absolute w-full h-full flex items-center justify-center text-3xl md:text-4xl">
          {faceSymbols[1]}
        </div>
        {/* Right */}
        <div className="cube__face cube__face--right absolute w-full h-full flex items-center justify-center text-3xl md:text-4xl">
          {faceSymbols[2]}
        </div>
        {/* Left */}
        <div className="cube__face cube__face--left absolute w-full h-full flex items-center justify-center text-3xl md:text-4xl">
          {faceSymbols[3]}
        </div>
        {/* Top */}
        <div className="cube__face cube__face--top absolute w-full h-full flex items-center justify-center text-3xl md:text-4xl">
          {faceSymbols[4]}
        </div>
        {/* Bottom */}
        <div className="cube__face cube__face--bottom absolute w-full h-full flex items-center justify-center text-3xl md:text-4xl">
          {faceSymbols[5]}
        </div>
      </div>
    </div>
  );
};

export default InteractiveCube;

/*
CSS to be added (e.g., in index.css or a component-specific style if preferred):

.scene {
  perspective: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cube {
  transform-style: preserve-3d;
  animation: cube-spin 15s infinite linear;
}

@media (prefers-reduced-motion: reduce) {
  .cube {
    animation: none; // Stop animation if user prefers reduced motion
    // Optionally, provide a static, slightly interesting angle:
    // transform: rotateX(20deg) rotateY(-30deg);
  }
}

.cube__face {
  background-color: rgba(56, 189, 248, 0.2); // accent-primary with opacity (sky-400)
  border: 1px solid var(--color-accent-primary); // Use CSS variable for accent-primary
  color: var(--color-dark-text-primary); // Text color for dark theme, adjust for light
  font-family: 'Courier New', Courier, monospace; // Monospace font for code symbols
  // Ensure this color is adaptable or defined for light theme too.
  // For dark theme: text-dark-text-primary
  // For light theme on this background: text-light-text-primary or a darker accent.
}

.dark .cube__face {
  background-color: rgba(56, 189, 248, 0.3); // Slightly more visible on dark bg
  border-color: var(--color-accent-primary-darker); // Or keep accent-primary
  color: var(--color-dark-text-primary);
}

// Define CSS variables for colors from Tailwind in :root or a common style sheet
// :root {
//   --color-accent-primary: #38BDF8;
//   --color-accent-primary-darker: #0EA5E9;
//   --color-dark-text-primary: #E2E8F0;
//   --color-light-text-primary: #1F2937;
// }


// Define face positions (assuming cube size is implicitly 100% of its container, e.g., 10rem)
// Let's say the container is 10rem (160px if 1rem = 16px)
// So, translateZ should be half of this, e.g., 5rem (80px)

.cube__face--front  { transform: rotateY(  0deg) translateZ(calc(var(--cube-size, 10rem) / 2)); }
.cube__face--back   { transform: rotateY(180deg) translateZ(calc(var(--cube-size, 10rem) / 2)); }
.cube__face--right  { transform: rotateY( 90deg) translateZ(calc(var(--cube-size, 10rem) / 2)); }
.cube__face--left   { transform: rotateY(-90deg) translateZ(calc(var(--cube-size, 10rem) / 2)); }
.cube__face--top    { transform: rotateX( 90deg) translateZ(calc(var(--cube-size, 10rem) / 2)); }
.cube__face--bottom { transform: rotateX(-90deg) translateZ(calc(var(--cube-size, 10rem) / 2)); }

@keyframes cube-spin {
  from { transform: rotateX(0deg) rotateY(0deg); }
  to   { transform: rotateX(360deg) rotateY(360deg); }
}

*/
