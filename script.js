let currentSlide = 0;

// Get all the slides
const slides = document.getElementsByClassName("slide");

// Function to change slide
function changeSlide(direction) {
  // Hide the current slide
  slides[currentSlide].classList.remove("active");

  // Calculate the new slide index
  currentSlide += direction;

  // Wrap around if we go out of bounds
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // Show the new slide
  slides[currentSlide].classList.add("active");
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 5000);
