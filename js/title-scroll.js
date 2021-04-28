$(".games-list__item").hover(
  function () {
    const x = 9.3,
      t = 0.06;
    let elem = $(this).find(".scroll_title"),
      textLength = elem.text().length,
      elemWidth = elem.width(),
      indent = textLength * x - elemWidth + 10,
      scroll = "-" + indent + "px",
      time = t * textLength + "s all linear";

    elem.css("transition", time);
    elem.css("text-indent", scroll);
  },
  function () {
    let elem = $(this).find(".scroll_title");
    elem.css("transition", "3s all ease");
    elem.css("text-indent", "5px");
  }
);
