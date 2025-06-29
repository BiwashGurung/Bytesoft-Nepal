    // For slider of Services
const slider = document.getElementById("slider");
const cardsToShow = 3;
const cardWidth = slider.children[0].offsetWidth + 20; // card + gap
let currentSlide = 0;

// Clone first few cards for infinite loop
for (let i = 0; i < cardsToShow; i++) {
  const clone = slider.children[i].cloneNode(true);
  slider.appendChild(clone);
}

function moveSlide(step = 1) {
  currentSlide += step;
  slider.style.transition = "transform 0.5s ease";
  slider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;

  // Seamless jump back to original
  if (currentSlide === slider.children.length - cardsToShow) {
    setTimeout(() => {
      slider.style.transition = "none";
      currentSlide = 0;
      slider.style.transform = `translateX(0)`;
    }, 510); // Wait for transition to finish
  }
}

// Auto move every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 5000);

