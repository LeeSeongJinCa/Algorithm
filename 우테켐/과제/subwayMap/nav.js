import { templates } from "./constants.js";

console.log("nav.js");

const nav = {
  menu: {
    station: document.querySelector("#station-manager-button"),
    line: document.querySelector("#line-manager-button"),
    section: document.querySelector("#section-manager-button"),
    mapPrint: document.querySelector("#map-print-manager-button"),
  },
  wrap: {
    station: document.querySelector("#station-wrap"),
    line: document.querySelector("#line-wrap"),
    section: document.querySelector("#section-wrap"),
    mapPrint: document.querySelector("#map-print-wrap"),
  },
};

const hideNav = () => {
  for (const i in nav.wrap) {
    nav.wrap[i].classList.add("hide");
  }
};

nav.menu.station.addEventListener("click", () => {
  hideNav();
  nav.wrap.station.classList.remove("hide");
});

nav.menu.line.addEventListener("click", () => {
  hideNav();
  nav.wrap.line.classList.remove("hide");
});

nav.menu.section.addEventListener("click", () => {
  hideNav();
  nav.wrap.section.classList.remove("hide");
});

nav.menu.mapPrint.addEventListener("click", () => {
  hideNav();
  nav.wrap.mapPrint.classList.remove("hide");
});

nav.wrap.station.innerHTML = templates.station;
nav.wrap.line.innerHTML = templates.line;
nav.wrap.section.innerHTML = templates.section;
nav.wrap.mapPrint.innerHTML = templates.mapPrint;
