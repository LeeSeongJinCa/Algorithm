import { lines } from "./constants.js";
import { displaySelect } from "./functions.js";

console.log("section.js");

const sectionVars = {
  title: document.querySelector("#section-title"),
  target: document.querySelector("#section-target"),
  input: document.querySelector("#section-input"),
  list: document.querySelector("#section-list"),
  apply: document.querySelector("#section-apply"),
  select: document.querySelector("#section-select"),
  addButton: document.querySelector("#section-add-button"),
  table: document.querySelector("#section-table"),
};

const onClickSection = (e) => {
  const section = e.currentTarget.dataset.id;
  const { target, title, apply } = sectionVars;

  target.innerHTML = `${section}`;
  title.classList.remove("hide");
  apply.classList.remove("hide");

  displaySection(section);
};

const displaySectionList = () => {
  const trs = document.createDocumentFragment();

  lines.forEach(({ lineName }) => {
    const button = document.createElement("button");

    button.dataset.id = lineName;
    button.textContent = lineName;
    button.addEventListener("click", onClickSection);
    trs.appendChild(button);
  });

  sectionVars.list.appendChild(trs);
};

const removeSection = (e) => {
  const target = e.currentTarget;
  console.log(target);
  // const section = target.dataset.id;
  // if (!confirm("정말 삭제하시겠습니까?")) return;
  // const idx = lines.findIndex(({ lineName }) => lineName === line);
  // lines.splice(idx, 1);
  // target.parentNode.parentNode.remove();
};

const getTemplate = (index, name) => {
  const tr = document.createElement("tr");
  const indexEl = document.createElement("td");
  const nameEl = document.createElement("td");
  const optionEl = document.createElement("td");
  const button = document.createElement("button");

  indexEl.textContent = index;
  nameEl.textContent = name;
  button.textContent = "노선에서 제거";
  button.dataset.index = index;
  button.dataset.name = name;
  button.addEventListener("click", removeSection);

  optionEl.appendChild(button);
  tr.appendChild(indexEl);
  tr.appendChild(nameEl);
  tr.appendChild(optionEl);

  return tr;
};

const onClickAddLine = () => {
  const lineName = sectionVars.select.value;
  const index = +sectionVars.input.value;
  const target = sectionVars.target.textContent;

  const line = lines.find(({ lineName }) => lineName === target);
  const { line: innerLine, lineName: name } = line;

  if (innerLine.some((_lineName) => _lineName === lineName)) {
    return alert("이미 존재하는 구간 입니다.");
  }
  if (index < 0 || index > innerLine.length) {
    return alert("순서의 범위를 알맞게 입력해주세요.");
  }
  if (isNaN(index)) {
    return alert("순서는 숫자로 입력해주세요.");
  }

  let left = innerLine.slice(0, index);
  let right = innerLine.slice(index, innerLine.length);
  line.line = [...left, lineName, ...right];

  displaySection(name);
};

const displaySection = (lineName) => {
  const trs = document.createDocumentFragment();
  const line = lines.find(({ lineName: _lineName }) => _lineName === lineName);

  line.line.forEach((name, i) => {
    const template = getTemplate(i, name);

    trs.appendChild(template);
  });

  sectionVars.table.innerHTML = "";
  sectionVars.table.appendChild(trs);
};

const displaySectionSelect = displaySelect(sectionVars.select);

sectionVars.input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    onClickAddLine();
  }
});

sectionVars.addButton.addEventListener("click", onClickAddLine);

document.addEventListener("DOMContentLoaded", displaySectionList);
document.addEventListener("DOMContentLoaded", displaySectionSelect);
