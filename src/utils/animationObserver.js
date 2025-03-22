export function initScrollAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
      '.scroll-trigger, .scale-trigger, .fade-trigger, .slide-right'
    );
    animatedElements.forEach((el) => observer.observe(el));
  });
}