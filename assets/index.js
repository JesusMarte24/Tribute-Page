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
const INDIVIDUAL__SECTION = document.querySelector(".plans__individual");
const TEAM__SECTION = document.querySelector(".plans__team");
const BUTTON__TEAM__SIZE__LEFT = document.getElementById(
  "left__button--size--team"
);
const BUTTON__TEAM__SIZE__RIGHT = document.getElementById(
  "right__button--size--team"
);

const TEAM__SIZE__INPUT = document.getElementById("team__size--input");
const TEAM__BILLED = document.getElementById("team__billed");
const TEAM__SAVING = document.getElementById("team__saving");

BUTTON__INDIVIDUAL.addEventListener("click", individualClass);
BUTTON__TEAM.addEventListener("click", teamActived);

BUTTON__TEAM__SIZE__LEFT.addEventListener("click", minusTeam);
BUTTON__TEAM__SIZE__RIGHT.addEventListener("click", plusTeam);

function individualClass() {
  if (!BUTTON__INDIVIDUAL.classList.contains("individual--actived")) {
    BUTTON__INDIVIDUAL.classList.toggle("individual--actived");
    BUTTON__INDIVIDUAL.classList.toggle("plan--selection");

    if (INDIVIDUAL__SECTION.classList.contains("individual__show--container")) {
      INDIVIDUAL__SECTION.classList.remove("individual__show--container");
    }

    if (!TEAM__SECTION.classList.contains("team__show--container")) {
      TEAM__SECTION.classList.add("team__show--container");
    }

    BUTTON__TEAM.classList.toggle("plan--selection");
    BUTTON__TEAM.classList.toggle("team--actived");
  }
}

function teamActived() {
  if (!BUTTON__TEAM.classList.contains("team--actived")) {
    BUTTON__TEAM.classList.toggle("team--actived");
    BUTTON__TEAM.classList.toggle("plan--selection");

    if (TEAM__SECTION.classList.contains("team__show--container")) {
      TEAM__SECTION.classList.remove("team__show--container");
    }

    if (
      !INDIVIDUAL__SECTION.classList.contains("individual__show--container")
    ) {
      INDIVIDUAL__SECTION.classList.add("individual__show--container");
    }

    BUTTON__INDIVIDUAL.classList.toggle("individual--actived");
    BUTTON__INDIVIDUAL.classList.toggle("plan--selection");
  }
}

function minusTeam() {
  if (TEAM__SIZE__INPUT.innerText > 2) {
    TEAM__SIZE__INPUT.innerText = parseInt(TEAM__SIZE__INPUT.innerText) - 1;
    TEAM__BILLED.innerText = parseInt(TEAM__BILLED.innerText) - 144;
    TEAM__SAVING.innerText = parseInt(TEAM__SAVING.innerText) - 84;
  }
}

function plusTeam() {
  TEAM__SIZE__INPUT.innerText = parseInt(TEAM__SIZE__INPUT.innerText) + 1;
  TEAM__BILLED.innerText = parseInt(TEAM__BILLED.innerText) + 144;
  TEAM__SAVING.innerText = parseInt(TEAM__SAVING.innerText) + 84;
}
