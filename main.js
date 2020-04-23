
// function rotateIcon() {
//   //icon rotation on hover
//   var icon = document.getElementById("play"); 
//   icon.classList.add('rotate');
// }

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    //icon rotation on hover
    var icon = document.getElementById("play"); 
    icon.classList.add('rotate');

    /* Toggle between hiding and showing the active panel */
    var panel = this.lastElementChild;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      icon.classList.remove('rotate');
      icon.classList.add('rotate-reverse');
    }
  });
}
