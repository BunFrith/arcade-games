jQuery(document).ready(function ($) {
  $(".main-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".main-slider__nav",
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
  });
  $(".main-slider__nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".main-slider",
    centerMode: true,
    focusOnSelect: true,
  });
  // $(".main-games").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   arrows: false,
  // });
});
