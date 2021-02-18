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

  $(".main-top").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    variableWidth: true,
    appendArrows: ".slick-arrows__top",
    prevArrow: '<svg class="slick-arrows__top-prev" viewBox="0 0 9 14"><path class="svg-strelka" d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z" ></path></svg>',
    nextArrow: '<svg class="slick-arrows__top-next" viewBox="0 0 9 14"><path class="svg-strelka" d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z" ></path></svg>',
  });
  $(".main-new").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    variableWidth: true,
    appendArrows: ".slick-arrows__new",
    prevArrow: '<button type="button" class="main-games__item-prev"><</button>',
    nextArrow: '<button type="button" class="main-games__item-next">></button>',
  });
});
