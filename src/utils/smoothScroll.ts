export const smoothScrollTo = (href: string) => {
  if (href === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  
  const targetId = href.replace('#', '');
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    const offset = 80; // Navigation height
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};