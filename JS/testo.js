// Testimonial Carousel
(function () {
  const track = document.getElementById("carouselTrack");
  const carousel = document.getElementById("carousel");
  const cards = track.children;
  let currentIndex = 0;
  const total = cards.length;

  function moveTestimonialSlide(step = 1) {
    currentIndex = (currentIndex + step + total) % total;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  let interval = setInterval(() => moveTestimonialSlide(1), 5000);

  carousel.addEventListener("mouseenter", () => clearInterval(interval));
  carousel.addEventListener("mouseleave", () => {
    interval = setInterval(() => moveTestimonialSlide(1), 5000);
  });
})();
