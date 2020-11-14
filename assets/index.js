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

const BUTTON__INDIVIDUAL = document.getElementById("plan--selection--1");
const BUTTON__TEAM = document.getElementById("plan--selection--2");
const INDIVIDUALSECTION = document.querySelector(".plans__individual");
const TEAMSECTION = document.querySelector(".plans__team");

BUTTON__INDIVIDUAL.addEventListener("click", individualClass);
BUTTON__TEAM.addEventListener("click", teamActived);

function individualClass() {
  if (!BUTTON__INDIVIDUAL.classList.contains("individual--actived")) {
    BUTTON__INDIVIDUAL.classList.toggle("individual--actived");
    BUTTON__INDIVIDUAL.classList.toggle("plan--selection");

    if (INDIVIDUALSECTION.classList.contains("individual__show--container")) {
      INDIVIDUALSECTION.classList.remove("individual__show--container");
    }

    if (!TEAMSECTION.classList.contains("team__show--container")) {
      TEAMSECTION.classList.add("team__show--container");
    }

    BUTTON__TEAM.classList.toggle("plan--selection");
    BUTTON__TEAM.classList.toggle("team--actived");
  }
}

function teamActived() {
  if (!BUTTON__TEAM.classList.contains("team--actived")) {
    BUTTON__TEAM.classList.toggle("team--actived");
    BUTTON__TEAM.classList.toggle("plan--selection");

    if (TEAMSECTION.classList.contains("team__show--container")) {
      TEAMSECTION.classList.remove("team__show--container");
    }

    if (!INDIVIDUALSECTION.classList.contains("individual__show--container")) {
      INDIVIDUALSECTION.classList.add("individual__show--container");
    }

    BUTTON__INDIVIDUAL.classList.toggle("individual--actived");
    BUTTON__INDIVIDUAL.classList.toggle("plan--selection");
  }
}
