jQuery(document).ready(function ($) {
  // Dark Mode
  $(".sgame-content__panel-darken").click(function () {
    $(".darken-mode").toggleClass("mode-active");
    $(this).find("svg").toggleClass("lights");
  });

  // Reload iFrame
  $(".sgame-content__panel-reinit").click(function () {
    $("iframe").each(function () {
      $(this).attr("src", $(this).attr("src"));
    });
    $(this).addClass("reload");
    setTimeout(function () {
      $(".sgame-content__panel-reinit").removeClass("reload");
    }, 400);
  });

  // To top button
  $(".to-top__btn").click(function () {
    $("body, html").animate({ scrollTop: 0 }, 1500);
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $(".to-top__btn").addClass("show");
    } else {
      $(".to-top__btn").removeClass("show");
    }
  });

  // full screen
  function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullscreen;

    if (requestMethod) {
      // Native full screen.
      requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") {
      // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
  }

  $(".sgame-content__panel-fullscreen").click(function () {
    // $(".sgame-content").toggleClass("fullscreen");
    $("header").toggleClass("d-block");
    var elem = document.body;
    var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) || (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) || (document.mozFullScreenElement && document.mozFullScreenElement !== null) || (document.msFullscreenElement && document.msFullscreenElement !== null);
    if (!isInFullScreen && $(".sgame-content").hasClass("fullscreen") == 0) {
      requestFullScreen(elem);
      $(".sgame-content").addClass("fullscreen");
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      $(".sgame-content").removeClass("fullscreen");
    }
  });

  $("body").keyup(function (e) {
    if (e.key == "Escape") {
      $("header").removeClass("d-block");
      $(".sgame-content").removeClass("fullscreen");
    }
  });
  // Burger Menu
  $(".burger").click(function () {
    $(this).toggleClass("open");
    $(".menu-mobile").toggleClass("active");
  });

  // Mobile Menu accord
  $(".accord .card-header").click(accord);
  function accord() {
    $(".accord .card-overlay").not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(1000).css("display", "flex");
    $(this).find("span").toggleClass("rotateAcc");
  }
});
