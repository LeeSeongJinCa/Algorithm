const stack = [];

const solution = (msg) => {
  if (msg.slice(0, 4) === "push") {
    const value = +msg.split("push")[1];
    stack.push(value);
  } else if (msg === "pop") {
    if (stack.length === 0) {
      console.log(-1);
    } else {
      console.log(stack.pop());
    }
  } else if (msg === "size") {
    console.log(stack.length);
  } else if (msg === "empty") {
    console.log(stack.length ? 0 : 1);
  } else if (msg === "top") {
    if (stack.length === 0) {
      console.log(-1);
    } else {
      console.log(stack[stack.length - 1]);
    }
  }
};

const messages = ["pop", "top", "push 123", "top", "pop", "top", "pop"];

messages.map((msg) => {
  solution(msg);
});
