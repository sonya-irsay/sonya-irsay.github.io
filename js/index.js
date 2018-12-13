var width = window.innerWidth;
var height = window.innerHeight;

var wire;

var title = "Title — Suisse Regular";
var titleFeed = "Title — Suisse Light";
var details = "Details — Suisse Light Italic";
var description = "Description — Suisse Light";
var disciplines = "Disciplines — Suisse Light Italic"
var lorem = "<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra facilisis dolor, at laoreet enim interdum et. Sed et nulla at nibh cursus interdum a sit amet quam. Vivamus volutpat elit quis dictum porta. Sed efficitur, sapien at imperdiet pharetra, erat dui dictum mi, vel cursus neque dui ac lacus."
var ipsum ="<br>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur vitae ipsum condimentum, rutrum urna vel, ultricies arcu. Donec egestas, justo eu venenatis volutpat, erat ligula porta urna, in sollicitudin eros nunc eu nibh. Mauris non libero varius, hendrerit tellus eget, tristique justo."

var smoothX = 0;
var smoothY = 0;
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

//shows the caption on hover main image
function mainHover() {

  $('.main-image').hover(function(event) {
    console.log("hovering");

    //get source of the image
    $('.main-image').mouseenter(function(event) {
      var imgSrc = $(this).find("img").attr("src");
      $(".showcase-title-hover").html(imgSrc);
      console.log(imgSrc);
    });

    //show caption on mouse position
    $('.main-image').mousemove(function(event) {
        var x = event.pageX;
        var y = event.pageY;

        if ($('.main-image').hasClass('main-img-hide')){
          var captionWidth = $('.showcase-caption-hover').outerWidth();
          var captionX;
          // change position of caption when mouse is near the edge
          if (x >= (width - captionWidth)) {
            captionX = (x - captionWidth);
          } else {
            captionX = x;
          }
          $(".showcase-caption-hover").css({
              "opacity": "1",
              "left": captionX,
              "top": y
          });
        }
    });

    $('.main-image').mouseleave(function(event) {
      $(".showcase-caption-hover").css({
          "opacity": "0"
      });
    });

  });

}

//shows the caption on hover single image
function singleHover() {

  $('.single-img').hover(function(event) {
    console.log("hovering");

  //get source of the image
    $('.single-img').mouseenter(function(event) {
      var imgSrc = $(this).find("img").attr("src");
      $(".showcase-title-hover").html(imgSrc);
      console.log(imgSrc);
    });

    //show caption on mouse position
    $('.single-img').mousemove(function(event) {
        var x = event.pageX;
        var y = event.pageY;

        if ($('.single-img').hasClass('img-hide')){
          var captionWidth = $('.showcase-caption-hover').outerWidth();
          var captionX;
          // change position of caption when mouse is near the edge
          if (x >= (width - captionWidth)) {
            captionX = (x - captionWidth);
          } else {
            captionX = x;
          }
          $(".showcase-caption-hover").css({
              "opacity": "1",
              "left": captionX,
              "top": y
          });
        }
    });

    $('.single-img').mouseleave(function(event) {
      $(".showcase-caption-hover").css({
          "opacity": "0"
      });
    });

  });

}

//shows the caption on hover video
function vidHover() {

  $('.iframe-hover').hover(function(event) {
    console.log("hovering over vid");

    //get source of videos
    $('.iframe-hover').mouseenter(function(event) {
      // var vidSrc = $(this).find("iframe").attr("src");
      var vidSrc = "www.vimeo.com"
      $(".showcase-title-hover").html(vidSrc);
      console.log(vidSrc);
    });

    //show caption on mouse position
    $('.iframe-hover').mousemove(function(event) {
      var x = event.pageX;
      var y = event.pageY;
      console.log("mouse move over vid");

      // if ($('.responsive-video').hasClass('vid-hide')){

        $(".showcase-caption-hover").css({
            "opacity": "1",
            "left": x,
            "top": y
        });
      // }
    });

    $('.iframe-hover').mouseleave(function(event) {
      $(".showcase-caption-hover").css({
          "opacity": "0"
      });
      console.log("mouse left vid");
    });

  });

}

function load() {
  var storedValue = JSON.parse(sessionStorage.getItem('store'));

  if (storedValue == true) {
    console.log("stored value is true!");
    toggleWireframe();
    mainHover();
    singleHover();

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
  //video show/hide
  $('.responsive-video').toggleClass('vid-hide vid-show');
};

//displays current font size
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
    $('#feed-1').html(titleFeed + " " + sInsert +"px");
    $('#feed-2').html(titleFeed + " " + sInsert +"px");
    $('#feed-3').html(titleFeed + " " + sInsert +"px");
    $('#feed-4').html(titleFeed + " " + sInsert +"px");
    $('#feed-5').html(titleFeed + " " + sInsert +"px");
    $('#feed-6').html(titleFeed + " " + sInsert +"px");
    $('#feed-7').html(titleFeed + " " + sInsert +"px");
    $('#feed-8').html(titleFeed + " " + sInsert +"px");
    $('#feed-9').html(titleFeed + " " + sInsert +"px");
  }
};

function toggleWireframe() {

  wireframeOnOff();

  if (!wire) {
    wire = true;
    sessionStorage.setItem('store', JSON.stringify(wire));
    console.log(wire);

    //turn on hovering captions
    mainHover();
    singleHover();


  } else if (wire) {
    wire = false;
    sessionStorage.setItem('store', JSON.stringify(wire));
    console.log(wire);

    //unbind mouse hovering captions
    $('.main-image').unbind('mouseenter mouseleave mousemove');
    $('.single-img').unbind('mouseenter mouseleave mousemove');
    $('.vid-hide').unbind('mouseenter mouseleave mousemove');
  }

  //TEXT CHAHNGES
  if (wire) {
    //button text
    buttonContent();
    displayFontSize();
    //text changes
    window.onresize = displayFontSize;
  } else {
    //button text
    buttonWire();

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
    $('#feed-1').html('Poster for Merge, featured visual made with C++ in Openframeworks for live VJ performance. Platforme Gallery, Paris.');
    $('#feed-2').html('Poster for Merge, featured visual by Kris Madden, made with C++ in Openframeworks for live VJ performance. Platforme Gallery, Paris.');
    $('#feed-3').html('Typographic poster for a festival. Silkscreen, 22 x 30, 4-color, CMYK color halftone. Communication Arts Typography Annual Award.');
    $('#feed-4').html('Set of postcards, riso print (2 colors) on Munken Print 300g paper, edition of 30. Collaborative project led by Aurelien Farina of Paper Tiger.');
    $('#feed-5').html('A book compiling research and explorations in pattern.');
    $('#feed-6').html('In progress — auction catalogue layouts for charity auction in support of world heritage sites in danger. Clients: UNESCO, Sotheby\'s and L\'ecole du management de la culture et du marche de l\'art, Paris.');
    $('#feed-7').html('Silkscreen poster, 33 x 45 cm, edition of 20, 7 colors, on white, gray and cream Arches paper.');
    $('#feed-8').html('Preliminary sketch for "of the river, of the forest.');
    $('#feed-9').html('3D meshes reacting to sound, coded in C++ with OpenFrameworks.');
  }

  console.log("wire toggled");
}

//scroll to top:
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
