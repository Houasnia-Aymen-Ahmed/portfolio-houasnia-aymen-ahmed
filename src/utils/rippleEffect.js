export const createRipple = (event) => {
  const button = event.currentTarget;

  // Remove any existing ripples to prevent multiple rapid clicks from cluttering
  const existingRipple = button.querySelector(".ripple");
  if (existingRipple) {
    existingRipple.remove();
  }

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  // Get click position relative to the button
  const rect = button.getBoundingClientRect();
  circle.style.left = `${event.clientX - rect.left - radius}px`;
  circle.style.top = `${event.clientY - rect.top - radius}px`;

  circle.classList.add("ripple");

  button.appendChild(circle);

  // Clean up the ripple element after the animation finishes
  // This timeout should match the animation duration in CSS
  setTimeout(() => {
    if (circle.parentNode === button) {
      button.removeChild(circle);
    } else if (document.body.contains(circle)) { // Fallback if somehow detached early but still in DOM
        circle.remove();
    }
  }, 600); // Corresponds to animation duration (e.g., ripple 0.6s)
};

// We'll need some CSS for the .ripple class. This can go into index.css
/*
In index.css:

.ripple {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7); // Or a theme color with opacity
  transform: scale(0);
  animation: ripple 0.6s linear;
  pointer-events: none; // Make sure it doesn't interfere with button clicks
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

// For dark theme, the ripple might need to be a dark color or adapt
// One way is to use a very light color for dark buttons, or a dark color for light buttons.
// Or use CSS variables set by the theme.
// For now, a white ripple is standard. We can refine this.
*/
