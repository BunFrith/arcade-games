jQuery(document).ready(function ($) {
  $(".sgame-content__panel-darken").click(function () {
    $(".darken-mode").toggleClass("mode-active");
  });
  $(".sgame-content__panel-reinit").click(function () {
    $("#gameframe")[0].contentWindow.location.reload(true);
  });

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
    $(".sgame-content").toggleClass("fullscreen");
    $("header").toggleClass("d-block");
    var elem = document.body;
    var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) || (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) || (document.mozFullScreenElement && document.mozFullScreenElement !== null) || (document.msFullscreenElement && document.msFullscreenElement !== null);
    if (!isInFullScreen) {
      requestFullScreen(elem);
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
    }
  });
});
