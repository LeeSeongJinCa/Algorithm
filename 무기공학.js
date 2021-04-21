let n = 2;
let m = 2;
let map = [
  [7, 5, 4],
  [3, 2, 9],
];
let visited = [
  [false, false, false],
  [false, false, false],
];

function rightUp(y, x) {
  return map[y][x - 1] + map[y + 1][x] + 2 * map[y][x];
}

function rightDown(y, x) {
  return map[y - 1][x] + map[y][x - 1] + 2 * map[y][x];
}

function leftUp(y, x) {
  return map[y][x + 1] + map[y + 1][x] + 2 * map[y][x];
}

function leftDown(y, x) {
  return map[y - 1][x] + map[y][x + 1] + 2 * map[y][x];
}

let ans = 0;

function dfs(y, x, sum) {
  console.log("sum :", sum);
  if (x == m) {
    x = 0;
    y++;
  }
  if (y == n) {
    ans = Math.max(ans, sum);
    return;
  }
  if (!visited[y][x]) {
    console.log("y: ", y, "x :", x);
    if (y + 1 < n && x - 1 >= 0 && !visited[y + 1][x] && !visited[y][x - 1]) {
      visited[y][x] = true;
      visited[y][x - 1] = true;
      visited[y + 1][x] = true;
      let nsum = sum + rightUp(y, x);
      dfs(y, x + 1, nsum);
      visited[y][x] = false;
      visited[y][x - 1] = false;
      visited[y + 1][x] = false;
    }
    if (y - 1 >= 0 && x - 1 >= 0 && !visited[y - 1][x] && !visited[y][x - 1]) {
      visited[y][x] = true;
      visited[y - 1][x] = true;
      visited[y][x - 1] = true;
      let nsum = sum + rightDown(y, x);
      dfs(y, x + 1, nsum);
      visited[y][x] = false;
      visited[y - 1][x] = false;
      visited[y][x - 1] = false;
    }
    if (y + 1 < n && x + 1 < m && !visited[y + 1][x] && !visited[y][x + 1]) {
      visited[y][x] = true;
      visited[y][x + 1] = true;
      visited[y + 1][x] = true;
      let nsum = sum + leftUp(y, x);
      dfs(y, x + 1, nsum);
      visited[y][x] = false;
      visited[y][x + 1] = false;
      visited[y + 1][x] = false;
    }
    if (y - 1 >= 0 && x + 1 < m && !visited[y - 1][x] && !visited[y][x + 1]) {
      visited[y][x] = true;
      visited[y - 1][x] = true;
      visited[y][x + 1] = true;
      let nsum = sum + leftDown(y, x);
      dfs(y, x + 1, nsum);
      visited[y][x] = false;
      visited[y - 1][x] = false;
      visited[y][x + 1] = false;
    }
  }
  dfs(y, x + 1, sum);
}

dfs(0, 0, 0);
console.log(ans);
