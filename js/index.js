var width = window.innerWidth;
var height = window.innerHeight;

var wire;

var title = "Title — Suisse Regular";
var details = "Details — Suisse Light Italic";
var description = "Description — Suisse Light";
var disciplines = "Disciplines — Suisse Light Italic"
var lorem = "<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra facilisis dolor, at laoreet enim interdum et. Sed et nulla at nibh cursus interdum a sit amet quam. Vivamus volutpat elit quis dictum porta. Sed efficitur, sapien at imperdiet pharetra, erat dui dictum mi, vel cursus neque dui ac lacus."
var ipsum ="<br>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur vitae ipsum condimentum, rutrum urna vel, ultricies arcu. Donec egestas, justo eu venenatis volutpat, erat ligula porta urna, in sollicitudin eros nunc eu nibh. Mauris non libero varius, hendrerit tellus eget, tristique justo."

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
      // $(".contact-box").toggleClass("wire-contact-box");
  }
}

// var misOne = document.getElementById("mis-1").getAttribute("src");
// console.log("<img src=" + misOne + ">");
function load() {
  var storedValue = JSON.parse(sessionStorage.getItem('store'));

  if (storedValue == true) {
    console.log("stored value is true!");
    toggleWireframe();

    wire = true;
    sessionStorage.setItem('store', JSON.stringify(wire));
    console.log(wire);

  } else if (storedValue == false) {
    console.log("stored value is false!");
    wire = false;
    sessionStorage.setItem('store', JSON.stringify(wire));
    console.log(wire);

  } else if (!storedValue) {
    console.log("there is no stored value");

    wire = false;
    sessionStorage.setItem('store', JSON.stringify(wire));
    console.log(wire);
  }
}

function buttonContent() {
x=document.getElementsByClassName("wireframe-button");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].innerText="Content";    // Change the content
    }
}

function buttonWire() {
x=document.getElementsByClassName("wireframe-button");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].innerText="Wireframe";    // Change the content
    }
}


//turns on/off wireframe styles
function wireframeOnOff() {
  //body color
  $("#body").toggleClass("wire-body");
  // navigation
  $("#nav").toggleClass("wire-nav");
  //bottom navigation
  $(".bottom-nav").toggleClass("wire-bottom-nav");
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
  //contact / info
  $(".contact-box").toggleClass("wire-show");
  //main page images show/hide
  $(".main-image").toggleClass('main-img-hide main-img-show');
};

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

  if (wire) {
    //text changes
    //Mistaek Magazine
    $('#mistaek').html(title + " " + sInsert +"px");
    $('#mistaek-det').html(details + " " + sInsert +"px");
    $('#mistaek-des-1').html(description + " " + sInsert +"px" + lorem);
    $('#mistaek-des-2').html(description + " " + sInsert +"px" + ipsum);
    $('#mistaek-dis').html(disciplines + " " + sInsert + "px");

    //Laysan
    $('#laysan').html(title + " " + sInsert +"px");
    $('#laysan-det').html(details + " " + sInsert +"px");
    $('#laysan-des-1').html(description + " " + sInsert +"px" + lorem);
    $('#laysan-des-2').html(description + " " + sInsert +"px" + ipsum);
    $('#laysan-des-3').html(description + " " + sInsert +"px" + lorem);
    $('#laysan-dis').html(disciplines + " " + sInsert + "px");

    //Feed
    $('#feed-1').html(title + " " + sInsert +"px");
  }
};

function toggleWireframe() {

  wireframeOnOff();

  if (!wire) {
    wire = true;
    sessionStorage.setItem('store', JSON.stringify(wire));
    console.log(wire);

    // wireframeOn();
    // console.log("wireframe turned on");
  } else if (wire) {
    wire = false;
    sessionStorage.setItem('store', JSON.stringify(wire));
    console.log(wire);

    // wireframeOff();
    // console.log("wireframe turned off");
  }

  //TEXT CHAHNGES
  if (wire) {
      //button text
      buttonContent();
      // $('.wireframe-button').html('Content');
      displayFontSize();
      //text changes
      window.onresize = displayFontSize;
    } else {
      //button text
      buttonWire();
      // $('.wireframe-button').html('Wireframe');

      //text changes
      //Mistaek Magazine
      $('#mistaek').html('Mistaek Magazine');
      $('#mistaek-2').html('Mistaek Magazine');
      $('#mistaek-det').html('Issue I, perfect bound, 160 pages.');
      $('#mistaek-des-1').html('Mistaek Magazine is about mistakes. Mistaek Magazine makes mistakes. The magazine’s conception coincided with, or rather came out of, the grave and radical changes rapidly unfolding on a global scale in the period around November 2016.');
      $('#mistaek-des-2').html('Mistaek Magazine tries to oppose the tendency to regress into cynicism or nihilism, instead proposing the possibility of cultivating self-conscious, critical reflection. Mistaek Mag seeks to examine humankind’s immense database of everything that has gone wrong, from silly typos to severe global disasters to the faults inherent in the design field itself, aiming to look critically at itself, at ourselves.');
      $('#mistaek-dis').html('Art Direction, Editorial Design, Print');

      //Laysan
      $('#laysan').html('Laysan View');
      $('#laysan-det').html('Creative direction: Print Plus Sign');
      $('#laysan-des-1').html('Logo and visual identity for Toronto contracting firm. The firm’s name (Laysan: an albatross, a sea bird) serves as the starting point for a playful and versatile identity made up of modular grid elements.');
      $('#laysan-des-2').html('The grid system of the logo expands into patterns, illustrations and pictograms representing the firm’s services.');
      $('#laysan-des-3').html('The base grid is revealed in letterheads and contract forms.');
      $('#laysan-dis').html('Identity, Logo, Print');

      //Feed
      $('#feed-1').html('Silkscreen poster, 33 x 45 cm, edition of 20, 7 colors, on white, gray and cream Arches paper.');
  }

  console.log("wire toggled");
}

//scroll to top:
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
