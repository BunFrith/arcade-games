jQuery(document).ready(function ($) {
  $(".main-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".main-slider__nav",
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 10000,
  });
  $(".main-slider__nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".main-slider",
    centerMode: true,
    focusOnSelect: true,
  });

  $(".burger").click(function () {
    $(this).toggleClass("open");
    $(".menu-mobile").toggleClass("active");
  });

  $(".accord .card-header").click(accord);
  function accord() {
    $(".accord .card-overlay").not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(1000).css("display", "flex");
    $(this).find("span").toggleClass("rotateAcc");
  }
  $(".favour").click(function () {
    $(this)
      .find(".games-list__item")
      .height($(".games-list__item").width() / 2);
  });
  $(window).resize(function () {
    $(".games-list__item").height($(".games-list__item").width() / 2);
  });
});
