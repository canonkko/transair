//@prepros-prepend libs/*.js

$(document).ready(function() {

  // tabs
  $(".tab__item").not(":first").hide();
  $(".tabs__wrapper .tab").click(function() {
	  $(".tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	  $(".tab__item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");

  // carousel
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    navText: ["<img src='img/icons/arrow_left.png'>","<img src='img/icons/arrow_right.png'>"],
    smartSpeed: 700,
  });

  // popup
  var popup = $('.popup')

  $('.login__link-js').on('click', function(e) {
    e.preventDefault();
    popup.bPopup ({
      // modalColor: "#2f3234",
      // opacity: 0.93,
      speed: 500,
      transition: "slideIn",
      transitionClose: "slideBack"
    });
  });

  $('.popup__btn-close').on('click', function(e) {
    e.preventDefault();
    popup.bPopup({
      speed: 500,
      transitionClose: "slideBack"
    }).close();
  });

});
