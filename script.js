const sliders = document.querySelectorAll('.slider-container');

sliders.forEach(slider => {
  const slides = slider.querySelectorAll('.slide');
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 3000); // setiap 3 detik
});
