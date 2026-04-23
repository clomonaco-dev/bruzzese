/*----------------------------------vertical-slider--------------------------------*/
// Get titles from the DOM
var titleMain = $("#animatedHeading");
var titleSubs = titleMain.find("slick-active");

if (titleMain.length) {

  titleMain.slick({
    autoplay: false,
    arrows: false,
    dots: false,
    slidesToShow: 1.5,
    centerPadding: "40px",
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    vertical: true,
    speed: 4000,
    autoplaySpeed: 500,
    useTransform: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    adaptiveHeight: true,

  });

  // On init
  $(".slick-dupe").each(function (index, el) {
    $("#animatedHeading").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
  });

  // Manually refresh positioning of slick
  titleMain.slick('slickPlay');
};

// Get titles from the DOM
var titleMain = $("#animatedHeading2");
var titleSubs = titleMain.find("slick-active");

if (titleMain.length) {

  titleMain.slick({
    autoplay: false,
    arrows: false,
    dots: false,
    slidesToShow: 1.5,
    centerPadding: "40px",
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    vertical: true,
    speed: 4000,
    autoplaySpeed: 500,
    useTransform: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    adaptiveHeight: true,

  });

  // On init
  $(".slick-dupe2").each(function (index, el) {
    $("#animatedHeading2").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
  });

  // Manually refresh positioning of slick
  titleMain.slick('slickPlay');
};

// Get titles from the DOM
var titleMain = $("#animatedHeading3");
var titleSubs = titleMain.find("slick-active");

if (titleMain.length) {

  titleMain.slick({
    autoplay: false,
    arrows: false,
    dots: false,
    slidesToShow: 1.5,
    centerPadding: "40px",
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    vertical: true,
    speed: 4000,
    autoplaySpeed: 500,
    useTransform: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    adaptiveHeight: true,

  });

  // On init
  $(".slick-dupe3").each(function (index, el) {
    $("#animatedHeading3").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
  });

  // Manually refresh positioning of slick
  titleMain.slick('slickPlay');
};


/*----------------------------------fine-vertical-slider--------------------------------*/

const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  if (window.scrollY > 75) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})



/*----------------------------------owl-carousel--------------------------------*/



/*----------------------------------fine-owl-carousel--------------------------------*/