document.querySelector(".casa").addEventListener("scroll", function (event) {
  const scrollSpeed = 0.5; // Ajusta la velocidad de desplazamiento (0 a 1)
  const scrollPosition = window.scrollY;
  const elementPosition = this.getBoundingClientRect().top;
  const distance = elementPosition - scrollPosition;

  if (distance > 0) {
    this.style.top = `${distance * scrollSpeed}px`;
  }
});
