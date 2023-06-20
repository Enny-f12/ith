let acc = document.getElementsByClassName("accordion");
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    let panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// function myFunction() {
//   let navbar = document.getElementById("nav");
//   navbar.classList.toggle("show");
// }

// $(document).ready(function () {
//   $(".icon").click(function () {
//     $("ul").toggleClass("show");
//   });
// });
