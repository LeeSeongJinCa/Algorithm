import { stations } from "./constants.js";

console.log("stationManagement.js");

const stationVars = {
  manageButton: document.querySelector("#station-manager-button"),
  wrap: document.querySelector("#station-table"),
  input: document.querySelector("#station-name-input"),
  addButton: document.querySelector("#station-add-button"),
  deleteButton: document.getElementsByClassName("station-delete-button"),
};

const stationNameTemplate = (value) => {
  const stationName = document.createElement("td");
  const name = document.createElement("span");

  name.textContent = value;
  stationName.appendChild(name);

  return stationName;
};

const deleteButtonTemplate = (value) => {
  const deleteButton = document.createElement("td");
  const button = document.createElement("button");

  button.classList.add("station-delete-button");
  button.dataset.id = value;
  button.textContent = "삭제";
  button.addEventListener("click", onClickDeleteStation);

  deleteButton.appendChild(button);

  return deleteButton;
};

const stationTemplate = (value) => {
  const tr = document.createElement("tr");
  const stationName = stationNameTemplate(value);
  const deleteButton = deleteButtonTemplate(value);

  tr.appendChild(stationName);
  tr.appendChild(deleteButton);

  return tr;
};

const displayNewStation = (value) => {
  const wrap = stationVars.wrap;
  const tr = stationTemplate(value);
  wrap.appendChild(tr);
};

const onClickDeleteStation = (e) => {
  const station = e.currentTarget.dataset.id;
  const idx = stations.findIndex((_station) => _station === station);

  stations.splice(idx, 1);
  e.target.parentNode.parentNode.remove();
};

const onClickAddStation = () => {
  const value = stationVars.input.value;

  if (value.trim() === "") {
    return alert("역을 입력해주세요.");
  }
  if (stations.includes(value)) {
    stationVars.input.focus();
    return alert("이미 존재하는 역입니다.");
  }

  stations.push(value);
  displayNewStation(value);
};

const displayStations = () => {
  const wrap = stationVars.wrap;

  wrap.innerHTML = "";

  let trs = document.createDocumentFragment();

  stations.forEach((station) => {
    const tr = stationTemplate(station);
    trs.appendChild(tr);
  });

  wrap.appendChild(trs);
};

const onKeypressEnter = (e) => {
  if (e.key === "Enter") onClickAddStation();
};

stationVars.input.addEventListener("keypress", onKeypressEnter);

stationVars.addButton.addEventListener("click", onClickAddStation);

stationVars.manageButton.addEventListener("click", displayStations);

document.addEventListener("DOMContentLoaded", displayStations);
