// ⚾ 미션 - 숫자 야구 게임
// 🎯 기능 요구사항
// 기본적으로 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임이다.
// 같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다.
// 예) 상대방(컴퓨터)의 수가 425일 때
// 123을 제시한 경우 : 1스트라이크
// 456을 제시한 경우 : 1볼 1스트라이크
// 789를 제시한 경우 : 낫싱
// 위 숫자 야구게임에서 상대방의 역할을 컴퓨터가 한다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.
// 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
// 게임을 종료한 후 게임을 다시 시작할 수 있다.
// 게임을 종료한 후 id가 game-restart-button인 버튼을 클릭함으로써 게임을 다시 시작할 수 있다.
// 예) <button id="game-restart-button">재시작</button>

console.log("⚾");

const bbVariable = {
  input: document.getElementById("input"),
  submitBtn: document.getElementById("submit"),
  form: document.getElementById("form"),
  result: document.getElementById("result"),
};

const resultTemplates = {
  collect: () => `
  🎉 <strong>정답을 맞추셨습니다!</strong> 🎉
  <p>
    <span>게임을 새로 시작하시겠습니까?</span>
    <button onclick="restart()">게임 재시작</button>
  </p>`,
  ball: (num) => `${num}볼`,
  strike: (num) => `${num}스트라이크`,
  nothing: () => "낫싱",
};

const getRandom = () => {
  const random = [];

  while (random.length < 3) {
    const num = Math.floor(Math.random() * 9 + 1);
    if (random.find((n) => n === num)) continue;
    random.push(num);
  }

  console.log("random:", random.join(""));

  return random.join("");
};

const getCount = (random, num) => {
  let strike = 0;
  let ball = 0;

  if (typeof num === "string" && num.length === 3) {
    num.split("").forEach((n, i) => {
      const isMatch = random.match(n);
      if (isMatch) {
        if (isMatch.index === i) strike++;
        else ball++;
      }
    });
  }

  return {
    collect: strike === 3,
    strike,
    ball,
  };
};

const compareWithRandom = () => {
  let random = getRandom();

  return (num) => ({
    getCount: getCount(random, num),
    createNewRandom: () => {
      random = getRandom();
    },
  });
};

const compareRandom = compareWithRandom();

const restart = () => {
  console.clear();
  console.log("⚾");
  bbVariable.input.value = "";
  bbVariable.result.innerHTML = "";
  compareRandom().createNewRandom();
};

bbVariable.form.addEventListener("submit", (e) => {
  e.preventDefault();
});

bbVariable.input.addEventListener("input", (e) => {
  if (e.key === "Enter") {
    bbVariable.submitBtn.click();
  }
});

bbVariable.submitBtn.addEventListener("click", () => {
  const value = bbVariable.input.value;

  if (value.length !== 3) {
    return alert("숫자를 3개 입력해주세요.");
  } else if (isNaN(+value)) {
    return alert("숫자로 입력해주세요.");
  }

  for (let i = 0; i < 3; i++) {
    const target = value[i];
    const exp = new RegExp(target, "gi");

    if (value.match(exp).length > 1) {
      return alert("숫자는 중복되지 않게 입력해주세요.");
    }
  }

  const { collect, strike, ball } = compareRandom(value).getCount;
  const result = bbVariable.result;

  result.innerHTML = "확인중...";

  if (collect) {
    result.innerHTML = resultTemplates.collect();
  } else if (ball || strike) {
    result.innerHTML = `
      ${ball ? resultTemplates.ball(ball) : ""}
      ${strike ? resultTemplates.strike(strike) : ""}
      `;
  } else {
    result.innerHTML = resultTemplates.nothing();
  }
});
