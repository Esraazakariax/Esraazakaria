// Function to animate progress bars when in view
const skillElements = document.querySelectorAll('.skill-per');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';  // Make element visible
      entry.target.style.width = entry.target.style.width; // Trigger animation
    }
  });
}, { threshold: 0.6 });  // Adjust the threshold to control when the animation starts

// Observe each skill element
skillElements.forEach(skill => {
  observer.observe(skill);
});
