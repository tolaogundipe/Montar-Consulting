// function myFunction() {
//     var x = document.getElementById("nav_group");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }

//for slide out navigation on mobile
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("nav_group").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("nav_group").style.width = "0";
}