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
document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to a more compatible method here
  }
});

function toggleInfo() {
  $("#info").toggleClass("show");
  // console.log("showing");

  if ($('.contact-box').hasClass('show')){
      $('.infoButton').html('Close');
    } else {
      $('.infoButton').html('Info');
  }
}

//shows the caption on hover main image
function mainHover() {

  $('.main-image').hover(function(event) {
    // console.log("hovering");

    //get source of the image
    $('.main-image').mouseenter(function(event) {
      var imgSrc = $(this).find("img").attr("src");
      $(".showcase-title-hover").html(imgSrc);
      // console.log(imgSrc);
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
    // console.log("hovering");

  //get source of the image
    $('.single-img').mouseenter(function(event) {
      var imgSrc = $(this).find("img").attr("src");
      $(".showcase-title-hover").html(imgSrc);
      // console.log(imgSrc);
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
    // console.log("hovering over vid");

    //get source of videos
    $('.iframe-hover').mouseenter(function(event) {
      // var vidSrc = $(this).find("iframe").attr("src");
      var vidSrc = "www.vimeo.com"
      $(".showcase-title-hover").html(vidSrc);
      // console.log(vidSrc);
    });

    //show caption on mouse position
    $('.iframe-hover').mousemove(function(event) {
      var x = event.pageX;
      var y = event.pageY;
      // console.log("mouse move over vid");

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
      // console.log("mouse left vid");
    });

  });

}

function load() {
  var storedValue = JSON.parse(sessionStorage.getItem('store'));

  if (storedValue == true) {
    // console.log("stored value is true!");
    toggleWireframe();
    mainHover();
    singleHover();

    wire = true;
    sessionStorage.setItem('store', JSON.stringify(wire));
    // console.log(wire);

  } else if (storedValue == false) {
    // console.log("stored value is false!");
    wire = false;
    sessionStorage.setItem('store', JSON.stringify(wire));
    // console.log(wire);

  } else if (!storedValue) {
    // console.log("there is no stored value");

    wire = false;
    sessionStorage.setItem('store', JSON.stringify(wire));
    // console.log(wire);
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

    //Research Book
    $('#research').html(title + " " + sInsert +"px");
    $('#research-det').html(details + " " + sInsert +"px");
    $('#research-des-1').html(description + " " + sInsert +"px" + lorem);
    $('#research-des-2').html(description + " " + sInsert +"px" + ipsum);
    $('#research-det-2').html(details + " " + sInsert +"px");
    $('#research-dis').html(disciplines + " " + sInsert + "px");

    //Refrag
    $('#refrag').html(title + " " + sInsert +"px");
    $('#refrag-det').html(details + " " + sInsert +"px");
    $('#refrag-des-1').html(description + " " + sInsert +"px" + lorem);
    $('#refrag-des-2').html(details + " " + sInsert +"px");
    $('#refrag-dis').html(disciplines + " " + sInsert + "px");

    //Toss
    $('#toss').html(title + " " + sInsert +"px");
    $('#toss-det').html(details + " " + sInsert +"px");
    $('#toss-des-1').html(description + " " + sInsert +"px" + lorem);
    $('#toss-des-2').html(description + " " + sInsert +"px");
    $('#toss-dis').html(disciplines + " " + sInsert + "px");

    //Inside
    $('#inside').html(title + " " + sInsert +"px");
    $('#inside-det').html(details + " " + sInsert +"px");
    $('#inside-des-1').html(description + " " + sInsert +"px" + ipsum);

    //Augment
    $('#augment').html(title + " " + sInsert +"px");
    $('#augment-det').html(details + " " + sInsert +"px");
    $('#augment-des-1').html(description + " " + sInsert +"px" + lorem);

    //Natura
    $('#natura').html(title + " " + sInsert +"px");
    $('#natura-det').html(details + " " + sInsert +"px");
    $('#natura-des-1').html(description + " " + sInsert +"px" + lorem);
    $('#natura-des-2').html(description + " " + sInsert +"px");
    $('#natura-dis').html(disciplines + " " + sInsert + "px");

    //Principium
    $('#principium').html(title + " " + sInsert +"px");
    $('#principium-det').html(details + " " + sInsert +"px");
    $('#principium-des-1').html(description + " " + sInsert +"px" + ipsum);
    $('#principium-dis').html(disciplines + " " + sInsert + "px");

    //Field Sketchbook
    $('#sketch').html(title + " " + sInsert +"px");
    $('#sketch-det').html(details + " " + sInsert +"px");
    $('#sketch-des-1').html(description + " " + sInsert +"px" + lorem);

    //Protest Fields
    $('#protest').html(title + " " + sInsert +"px");
    $('#protest-det').html(details + " " + sInsert +"px");
    $('#protest-des').html(description + " " + sInsert +"px" + lorem);
    $('#protest-det-2').html(details + " " + sInsert +"px");
    $('#protest-dis').html(disciplines + " " + sInsert + "px");

    //Process
    $('#process').html(title + " " + sInsert +"px");
    $('#process-det').html(details + " " + sInsert +"px");
    $('#process-des-1').html(description + " " + sInsert +"px");

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
    // console.log(wire);

    //turn on hovering captions
    mainHover();
    singleHover();


  } else if (wire) {
    wire = false;
    sessionStorage.setItem('store', JSON.stringify(wire));
    // console.log(wire);

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

    //Research Book
    $('#research').html('Protest Fields: Book');
    $('#research-det').html('Perfect bound, 80g recycled stock and sandpaper cover. 3 copies make up the size of a standard brick.');
    $('#research-des-1').html('The book investigates the practice of illegal claiming of land in Crimea, Ukraine known as building Protest Fields. As exhibited at the Mona Bismarck Center, La Nuit Européene des Musées.');
    $('#research-des-2').html('A plot of land divided into lots and populated with generic, repeating boxes' +
      ' is a familiar product of contemporary built space. The landscape of Crimea, Ukraine is replete with' +
      ' such spaces – grass fields dotted with standardized limestone huts arranged in a rough but consistent' +
      ' grid. They are called protest fields. They result from a practice of unauthorized occupation of land' +
      ' in the Crimean territory, as a reaction to historically consistent acts of violence. They are a form' +
      ' of resistance, a practice of inscribing protest onto a landscape, a way of laying claim to a home' +
      ' and a homeland. A protest hut is built as a placeholder, occupying a space for a permanent home.' +
      ' Its emptiness stands as a monument to displacement and the hope for a future completeness.');
    $('#research-det-2').html('Exhibition photos by Vinciane Lebrun/Voyez-Vous and Julien Mouffron-Gardner.');
    $('#research-dis').html('Print, Editorial, Research');

    //Refrag
    $('#refrag').html('Refrag Website');
    $('#refrag-det').html('HTML, CSS, JavaScript.');
    $('#refrag-des-1').html('Website re-design and development for the fourth edition of Refrag, an annual symposium exploring new connections between art, culture and technology in Paris, France. This one-page website celebrates early internet and glitch aesthetics, using simple typographic animations and bold colors.');
    $('#refrag-des-2').html('<a href="http://refrag.paris" target="_blank">www.refrag.paris</a>');
    $('#refrag-dis').html('Web, Graphic, Identity');

    //Toss
    $('#toss').html('Toss');
    $('#toss-det').html('iOS app, javascript.');
    $('#toss-des-1').html('Minimal iOS recreation of the 1970-90 toy Waterful Ring Toss. The goal is to use your touch to launch the hoops in the water and loop them onto the pegs. It has no score, no levels, no built-in user gratification – the player is invited to return to the basics of the childhood handheld game.');
    $('#toss-des-2').html('The app features water physics simulation, and renews itself after completion, with randomized peg layouts.');
    $('#toss-dis').html('Interactive, Design, App');

    //Inside
    $('#inside').html('Inside');
    $('#inside-det').html('Unity, C#, Oculus Rift.');
    $('#inside-des-1').html('In collaboration with Erica Kermani. A playful VR experience exploring the relationship between sight and simulated environments.');

    //Augment
    $('#augment').html('Augment Monument');
    $('#augment-det').html('AR App. Unity, C#, ARKit');
    $('#augment-des-1').html('Can\'t remember the names of all the white men glorified in public spaces? Meet Augment Monument - an AR tool conceived to anonymize something that is meant to embody the opposite. It allows the user to filter out the heroes they do not choose, and to reclaim the substance of public space.');

    //Natura
    $('#natura').html('De Natura Rerum');
    $('#natura-det').html('80 pages, Risograph print (3 colors) on white and fluo green stock, edition of 200.');
    $('#natura-des-1').html('Collaborative edition of Lucretius’ De Natura Rerum produced as part of You Are Here exhibition during the COP21 conference in Paris, France. The text was illustrated using only scanned images from found secondhand books.');
    $('#natura-des-2').html('Project led by Aurélien Farina of <a href="http://papertiger.fr" target="_blank">Paper! Tiger!</a>');
    $('#natura-dis').html('Graphic, Editorial, Print');

    //Principium
    $('#principium').html(':Principium');
    $('#principium-det').html('Riso print, 2 color, edition of 250.');
    $('#principium-des-1').html('Visual identity and catalogue for :Principium, Parsons MFA graduate exhibition at le Hub Lafayette Anticipation Gallery.');
    $('#principium-dis').html('Graphic, Editorial, Print');

    //Field Sketchbook
    $('#sketch').html('Field Sketchbook');
    $('#sketch-det').html('Oil on wood');
    $('#sketch-des-1').html('Small oil sketches on found wood, compiled to make a book. Ongoing.');

    //Protest Fields
    $('#protest').html('Protest Fields: Mona Bismarck');
    $('#protest-det').html('Wood, corrugated metal roof, construction lighting.');
    $('#protest-des').html('A plot of land divided into lots and populated with generic, repeating boxes is a familiar product of contemporary built space.' +
    ' The landscape of Crimea, Ukraine is replete with such spaces – grass fields dotted with standardized limestone huts arranged in a rough but consistent grid.' +
    ' They are called protest fields. They result from a practice of unauthorized occupation of land in the Crimean territory, as a reaction to historically consistent acts of violence.' +
    ' They are a form of resistance, a practice of inscribing protest onto a landscape, a way of laying claim to a home and a homeland. A protest hut is built as a placeholder,' +
    ' occupying a space for a permanent home. Its emptiness stands as a monument to displacement and the hope for a future completeness.');
    $('#protest-det-2').html('Exhibited at the Mona Bismarck American Center, Nuit Européene des Musées. Exhibition shots by Vinciane Lebrun/Voyez-Vous and Julien Mouffron-Gardner.');
    $('#protest-dis').html('Installation, Exhibition, Research');

    //Process
    $('#process').html('Process');
    $('#process-det').html('Mixed Media.');
    $('#process-des-1').html('Selected pages from sketchbooks.');

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

  // console.log("wire toggled");
}

//scroll to top:
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
