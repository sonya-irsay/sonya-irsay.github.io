var scene = document.getElementById('scene');
var email =  document.getElementById("email");
var info =  document.getElementById("info");
var parallaxInstance = new Parallax(scene);

//Slides
// -----------------------------

var slideIndex = 1;
showSlides(slideIndex);

document.onclick = function(){
  showSlides(slideIndex += 1);
};

document.onmousemove = function(e){
  document.getElementById("coords").style.top = e.clientY + 10 + "px";
  document.getElementById("coords").style.left = e.clientX + 10 + "px";
}

document.getElementById("nav").onmouseover = function() {
  document.getElementById("coords").style.opacity = "0";
}

document.getElementById("nav").onmouseout = function() {
  document.getElementById("coords").style.opacity = "1";
}

// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-wrapper");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0";
  }

  slides[slideIndex-1].style.opacity = "1";
  document.getElementById("coords").innerHTML = slides[slideIndex-1].querySelector("p").innerHTML;
}

//Text
// -----------------------------

function changeText() {
  email.innerHTML = "sanie.irsay@gmail.com";
}

function returnText() {
  email.innerHTML = "Email";
}
