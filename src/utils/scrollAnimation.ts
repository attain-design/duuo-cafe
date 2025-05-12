
export const initScrollAnimations = () => {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in-up');
    
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementHeight = element.clientHeight;
      const windowHeight = window.innerHeight;
      
      // Element is considered visible when its top part enters the bottom 25% of the viewport
      if (elementTop <= windowHeight - elementHeight / 4) {
        element.classList.add('visible');
      }
    });
  };
  
  // Initial check on page load
  animateOnScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', animateOnScroll);
  
  // Return cleanup function
  return () => window.removeEventListener('scroll', animateOnScroll);
};
