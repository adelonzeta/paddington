$(document).ready(function () {
  checkSize();
  $(window).resize(checkSize);
});

function checkSize() {
  if ($('.checksize').css("float") == "left") {
    $('#collapse-services').addClass("collapse");
    $('#collapse-book-online').addClass("collapse");
    $('#collapse-about').addClass("collapse");
    $('#collapse-location').addClass("collapse");
    $('#collapse-opening').addClass("collapse");
    $('#collapse-reviews').addClass("collapse");
  } else {
    $('#collapse-services').removeClass("collapse");
    $('#collapse-book-online').removeClass("collapse");
    $('#collapse-about').removeClass("collapse");
    $('#collapse-location').removeClass("collapse");
    $('#collapse-opening').removeClass("collapse");
    $('#collapse-reviews').removeClass("collapse");
  }
}
