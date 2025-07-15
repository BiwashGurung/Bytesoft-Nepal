// Services Slider
(function () {
  const slider = document.getElementById("slider");
  const cardsToShow = 3;
  const cardWidth = slider.children[0].offsetWidth + 20; // card + gap
  let currentSlide = 0;

  // Clone first few cards for seamless looping
  for (let i = 0; i < cardsToShow; i++) {
    const clone = slider.children[i].cloneNode(true);
    slider.appendChild(clone);
  }

  function moveServiceSlide(step = 1) {
    currentSlide += step;
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;

    // Reset position after last real card
    if (currentSlide === slider.children.length - cardsToShow) {
      setTimeout(() => {
        slider.style.transition = "none";
        currentSlide = 0;
        slider.style.transform = `translateX(0)`;
      }, 510);
    }
  }

  // Attach to buttons
  window.moveServiceSlide = moveServiceSlide;

  // Auto move every 5 seconds
  setInterval(() => {
    moveServiceSlide(1);
  }, 5000);
})();
