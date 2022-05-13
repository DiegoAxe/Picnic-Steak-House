var Footer = document.getElementsByClassName("subfooter");
var X;

for (X = 0; X < Footer.length; X++) {
  Footer[X].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}