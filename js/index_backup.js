var width = window.innerWidth;
var height = window.innerHeight;

var title = "Title: Suisse Regular";
var details = "Details: Suisse Light Italic";
var description = "Description: Suisse Light";
var lorem = "<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra facilisis dolor, at laoreet enim interdum et. Sed et nulla at nibh cursus interdum a sit amet quam. Vivamus volutpat elit quis dictum porta. Sed efficitur, sapien at imperdiet pharetra, erat dui dictum mi, vel cursus neque dui ac lacus."
var ipsum ="<br>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur vitae ipsum condimentum, rutrum urna vel, ultricies arcu. Donec egestas, justo eu venenatis volutpat, erat ligula porta urna, in sollicitudin eros nunc eu nibh. Mauris non libero varius, hendrerit tellus eget, tristique justo."

var misOne = document.getElementById("mis-1").getAttribute("src");
console.log("<img src=" + misOne + ">");

// function: toggleInfo
// the div: #info
// showing class: show
// the button: infoButton
// the existing class: contact-box
function toggleInfo() {
  $("#info").toggleClass("show");
  console.log("showing");

  if ($('.contact-box').hasClass('show')){
      $('.infoButton').html('Close');
    } else {
      $('.infoButton').html('Info');
  }
}

//dsiplays current font size
function displayFontSize() {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    var sInsert;
    // size calculation code here
    if (myWidth >= 701) {
      sInsert = 18*1;
    } else {
      sInsert = 18*0.9;
    }
    //text changes
    $('#mistaek').html(title + " " + sInsert +"px");
    $('#mistaek-det').html(details + " " + sInsert +"px");
    $('#mistaek-des-1').html(description + " " + sInsert +"px" + lorem);
    $('#mistaek-des-2').html(description + " " + sInsert +"px" + ipsum);
};

function toggleWireframe() {
  displayFontSize();
  //body color
  $("#body").toggleClass("wire-body");
  // navigation
  $("#nav").toggleClass("wire-nav");
  //margins show/hide
  $('.top-margin').toggleClass('margin-hide margin-show');
  $('.left-margin').toggleClass('margin-hide margin-show');
  $('.margin-two').toggleClass('margin-hide margin-show');
  $('.margin-three').toggleClass('margin-hide margin-show');
  $('.margin-four').toggleClass('margin-hide margin-show');
  $('.margin-five').toggleClass('margin-hide margin-show');
  $('.right-margin').toggleClass('margin-hide margin-show');
  //single work images show/hide
  $('.single-img').toggleClass('img-show img-hide');
  //bottom navigation
  $("#bottom-nav").toggleClass("wire-bottom-nav");

  //TEXT CHAHNGES
  if ($('#body').hasClass('wire-body')){
      //button text
      $('.wireframe-button').html('Content');

      //text changes
      window.onresize = displayFontSize;
    } else {
      //button text
      $('.wireframe-button').html('Wireframe');

      //text changes
      $('#mistaek').html('Mistaek Magazine');
      $('#mistaek-2').html('Mistaek Magazine');
      $('#mistaek-det').html('Issue I, perfect bound, 160 pages.');
      $('#mistaek-des-1').html('Mistaek Magazine is about mistakes. Mistaek Magazine makes mistakes. The magazine’s conception coincided with, or rather came out of, the grave and radical changes rapidly unfolding on a global scale in the period around November 2016.');
      $('#mistaek-des-2').html('Mistaek Magazine tries to oppose the tendency to regress into cynicism or nihilism, instead proposing the possibility of cultivating self-conscious, critical reflection. Mistaek Mag seeks to examine humankind’s immense database of everything that has gone wrong, from silly typos to severe global disasters to the faults inherent in the design field itself, aiming to look critically at itself, at ourselves.');
  }

  // Below: selects all p elements and changes them all to white
  // but: doesnt toggle
    // function pElements() {
    //   var nodeList = document.querySelectorAll("p");
    //   var i;
    //   for (i = 0; i < nodeList.length; i++) {
    //       nodeList[i].style.color = "white";
    //   }
    // }
    // pElements();

  console.log("wire toggled");
}

//scroll to top:
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// $( document ).ready(function() {

  //console.log( "ready!" );
// });

//for displaying window height and wdith:
//add p element in html with class "dimensions"
// document.getElementById("dimensions").innerHTML = myWidth + "x" + myHeight;
