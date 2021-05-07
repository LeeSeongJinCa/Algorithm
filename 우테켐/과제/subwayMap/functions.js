import { stations } from "./constants.js";

export const displaySelect = (target) => {
  return () => {
    const fragment = document.createDocumentFragment();

    stations.forEach((station) => {
      const option = document.createElement("option");
      option.value = station;
      option.textContent = station;
      fragment.appendChild(option);
    });

    target.appendChild(fragment);
  };
};
