$(document).ready(function() {
  $(".navigation__link").on("click", function(event) {
    $(".navigation__nav").css("opacity", "0");
    $(".navigation__nav").css("width", "0");
    $(".navigation__background").css("transform", "scale(0)");
    $(".navigation__checkbox").prop("checked", false);
    $(".navigation__nav").removeAttr("style");
    $(".navigation__background").removeAttr("style");
  });
});
