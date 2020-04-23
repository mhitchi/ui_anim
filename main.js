//icon rotation on hover
var icon = document.getElementsByClassName("play");

icon.addEventListener("mouseover", function() {
  icon.css('transform','rotate(' + 90 + 'deg)');
})