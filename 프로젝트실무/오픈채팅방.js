const rcd = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

const commands = {
  Enter: "Enter",
  Leave: "Leave",
  Change: "Change",
};
const koreanCommands = {
  Enter: "님이 들어왔습니다.",
  Leave: "님이 나갔습니다.",
};
const { Enter, Leave, Change } = commands;

function solution(record = rcd) {
  const answer = [];
  const users = {};

  const queue = record.map((msg) => {
    const splitted = msg.split(" ");
    const [command, uid, name] = splitted;

    if (command === Enter) {
      users[uid] = { name };
    }

    if (command === Change) {
      users[uid].name = name;
    }

    if (command === Enter || command === Leave) {
      return { command, uid };
    }
  });

  queue
    .filter((_) => _)
    .map(({ command, uid }) => {
      const name = users[uid].name;
      const cmd = koreanCommands[command];

      answer.push(name + cmd);
    });

  return answer;
}

console.log(solution(rcd));

[
  "Prodo님이 들어왔습니다.",
  "Ryan님이 들어왔습니다.",
  "Prodo님이 나갔습니다.",
  "Prodo님이 들어왔습니다.",
];
