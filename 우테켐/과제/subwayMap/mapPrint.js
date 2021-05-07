import { lines } from "./constants.js";

console.log("mapPrint.js");

const mapVars = {
  navButton: document.querySelector("#map-print-manager-button"),
  list: document.querySelector("#map-print-list"),
};

const getTemplate = (name) => {
  const li = document.createElement("li");
  li.textContent = name;
  return li;
};

const displayMap = () => {
  const fragment = document.createDocumentFragment();

  lines.forEach(({ lineName, line }) => {
    const h3 = document.createElement("h3");
    h3.textContent = lineName;

    fragment.appendChild(h3);

    line.forEach((name) => {
      const li = getTemplate(name);
      fragment.appendChild(li);
    });
  });

  mapVars.list.innerHTML = "";
  mapVars.list.appendChild(fragment);
};

mapVars.navButton.addEventListener("click", displayMap);

document.addEventListener("DOMContentLoaded", displayMap);
