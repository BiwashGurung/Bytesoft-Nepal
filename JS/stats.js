// For stats animation
 function animateCounter(el, target, duration = 2000) {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const counter = setInterval(() => {
      start++;
      el.textContent = start + '+';
      if (start >= target) clearInterval(counter);
    }, stepTime);
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll('.stat-number');
        statNumbers.forEach(el => {
          const target = +el.getAttribute('data-target');
          animateCounter(el, target);
        });
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.4 
  });

  document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.why-choose-us');
    observer.observe(section);
  }); 
  