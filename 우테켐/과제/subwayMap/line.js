import { lines } from "./constants.js";
import { displaySelect } from "./functions.js";

console.log("line.js");

const lineVars = {
  wrap: document.querySelector("#wrap"),
  input: document.querySelector("#line-input"),
  table: document.querySelector("#line-table"),
  start: document.querySelector("#line-start"),
  end: document.querySelector("#line-end"),
  addButton: document.querySelector("#line-add-button"),
};

const getTemplate = (lineName, start, end) => {
  const tr = document.createElement("tr");
  const lineNameEl = document.createElement("td");
  const startEl = document.createElement("td");
  const endEl = document.createElement("td");
  const buttonEl = document.createElement("td");
  const button = document.createElement("button");

  button.addEventListener("click", removeLine);

  lineNameEl.textContent = lineName;
  startEl.textContent = start;
  endEl.textContent = end;
  button.dataset.id = lineName;
  button.textContent = "삭제";

  buttonEl.appendChild(button);
  tr.appendChild(lineNameEl);
  tr.appendChild(startEl);
  tr.appendChild(endEl);
  tr.appendChild(buttonEl);

  return tr;
};

const addNewLine = () => {
  const lineName = lineVars.input.value.trim();
  const start = lineVars.start.value;
  const end = lineVars.end.value;

  if (lineName === "") {
    return alert("노선 이름을 입력해주세요.");
  }
  if (start === end) {
    return alert("상행 종점역과 하행 종점역을 다르게 선택해주세요.");
  }
  if (lines.some(({ lineName: _lineName }) => _lineName === lineName)) {
    return alert("이미 존재하는 노선 입니다.");
  }

  lines.push({
    lineName,
    line: [start, end],
  });

  const template = getTemplate(lineName, start, end);

  lineVars.table.appendChild(template);
};

const removeLine = (e) => {
  const target = e.currentTarget;
  const line = target.dataset.id;

  if (!confirm("정말 삭제하시겠습니까?")) return;

  const idx = lines.findIndex(({ lineName }) => lineName === line);

  lines.splice(idx, 1);
  target.parentNode.parentNode.remove();
};

const displayLines = () => {
  const trs = document.createDocumentFragment();

  lines.forEach(({ lineName, line }) => {
    const template = getTemplate(lineName, line[0], line[1]);

    trs.appendChild(template);
  });

  lineVars.table.appendChild(trs);
};

const displayStartSelect = displaySelect(lineVars.start);
const displayEndSelect = displaySelect(lineVars.end);

lineVars.addButton.addEventListener("click", addNewLine);

document.addEventListener("DOMContentLoaded", displayStartSelect);
document.addEventListener("DOMContentLoaded", displayEndSelect);
document.addEventListener("DOMContentLoaded", displayLines);
