var modal = document.getElementById('modal');
var btn = document.getElementById("btn");
var close = document.getElementById("close");
var slideIndex = 1;

btn.onclick = function(){
    modal.style.display = "block";
}
close.onclick = function(){
    modal.style.display = "none";
}

showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}