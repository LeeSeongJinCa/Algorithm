import Car from "./Car.js";

console.log("🏎️");

const variables = {
  namesInput: document.getElementById("car-names-input"),
  namesSubmit: document.getElementById("car-names-submit"),
  countInput: document.getElementById("racing-count-input"),
  countSubmit: document.getElementById("racing-count-submit"),
  countWrap: document.getElementById("count-wrap"),
  result: document.getElementById("result"),
  winner: document.getElementById("winner"),
  restart: document.getElementById("restart"),
};

const race = {};

const createRace = (names) => {
  names.forEach((name) => {
    race[name] = new Car(name, 0);
  });
};

const isOverNamesLength = (names) => {
  return names.some((name) => name.trim().length > 5);
};

const displayRace = (names) => {
  const ul = document.createElement("ul");

  names.forEach((name) => {
    const random = Math.floor(Math.random() * 9);

    if (random >= 4) race[name].increaseCount();

    ul.innerHTML += `
    <li>
      ${race[name].getName()}:
      ${"-".repeat(race[name].getCount())}
    </li>`;
  });

  variables.result.appendChild(ul);
};

const displayWinner = () => {
  const winners = [];
  let max = 0;

  for (const i in race) {
    max = Math.max(max, race[i].getCount());
  }

  for (const i in race) {
    if (race[i].getCount() === max) winners.push(i);
  }

  variables.winner.innerHTML = `최종 우승자 : ${winners.join(", ")}`;
};

const startRace = () => {
  const value = variables.namesInput.value;
  const names = value.split(",");
  const count = +variables.countInput.value;

  for (let i = 0; i < count; i++) {
    displayRace(names);
  }

  displayWinner();
};

const onKeypressEnter = (e, cb) => {
  if (e.key === "Enter") {
    cb();
  }
};

const onSubmitNames = () => {
  const value = variables.namesInput.value;
  const names = value.split(",");

  if (value.length === 0) {
    return alert("자동차 이름을 입력해주세요.");
  }
  if (isOverNamesLength(names)) {
    return alert("자동차 이름을 5글자 이하로 입력해주세요.");
  }

  createRace(names);
  variables.countWrap.style.display = "block";
  variables.countInput.focus();
};

const onSubmitCount = () => {
  const count = variables.countInput.value;

  if (count.length === 0) {
    return alert("숫자를 입력해주세요.");
  }
  if (isNaN(+count)) {
    return alert("숫자로 입력해주세요.");
  }

  startRace();
  variables.restart.style.display = "block";
};

const onClickRestart = () => {
  variables.namesInput.value = "";
  variables.countInput.value = "";
  variables.result.innerHTML = "";
  variables.winner.innerHTML = "";
  variables.restart.style.display = "none";
};

variables.namesInput.addEventListener("keypress", (e) => {
  onKeypressEnter(e, onSubmitNames);
});

variables.namesSubmit.addEventListener("click", onSubmitNames);

variables.countInput.addEventListener("keypress", (e) => {
  return onKeypressEnter(e, onSubmitCount);
});

variables.countSubmit.addEventListener("click", onSubmitCount);

variables.restart.addEventListener("click", onClickRestart);

const showRace = () => {
  console.log(race);
  for (const i in race) {
    console.log(race[i], race[i].getCount());
  }
};

document.getElementById("showRace").addEventListener("click", showRace);
