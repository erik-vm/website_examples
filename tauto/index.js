window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});
var slideshow = document.getElementById("slideshow");
var slides = slideshow.getElementsByTagName("img");
var index = 0;

function nextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}
function prevSlide() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

function toggle() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("active");
}
