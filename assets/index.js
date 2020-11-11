/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */

function openNav() {
  document.getElementById("mySidenav").style.width = "188px";
  document.getElementById("main").style.marginLeft = "188px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

let buttonIndividual = document.getElementById("plan--selection--1");
let buttonTeam = document.getElementById("plan--selection--2");

buttonIndividual.addEventListener("click", individualClass);
buttonTeam.addEventListener("click", teamClass);

function individualClass() {
  buttonIndividual.classList.toggle("individual--actived");
  buttonIndividual.classList.toggle("plan--selection");
}

function teamClass() {
  buttonTeam.classList.toggle("plan--selection");
  buttonTeam.classList.toggle("team--actived");
}
