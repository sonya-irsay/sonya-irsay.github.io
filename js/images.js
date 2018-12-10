var wire;

function preLoad() {
  var storedValue = JSON.parse(sessionStorage.getItem('store'));

  if (storedValue == true) {
    //main page images show/hide
    $(".main-image").toggleClass('main-img-hide main-img-show');

  } else if (storedValue == false) {
    // //main page images show/hide
    // $(".main-image").toggleClass('main-img-hide main-img-show');

  } else if (!storedValue) {
    // //main page images show/hide
    // $(".main-image").toggleClass('main-img-hide main-img-show');
  }
}

preLoad();
