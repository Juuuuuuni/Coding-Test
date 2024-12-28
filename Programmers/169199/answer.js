// console.log(solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]));
console.log(solution([".D.R", "....", ".G..", "...D"]));

function solution(board) {
  const rows = board.length;
  const cols = board[0].length;

  let start = null;
  let goal = null;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === "R") start = [i, j];
      if (board[i][j] === "G") goal = [i, j];
    }
  }

  const queue = [[...start, 0]];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  while (queue.length) {
    let [x, y, count] = queue.shift();

    if (goal[0] === x && goal[1] === y) return count;

    for (const [dx, dy] of directions) {
      let nx = x;
      let ny = y;
      while (
        nx + dx >= 0 &&
        nx + dx < rows &&
        ny + dy >= 0 &&
        ny + dy < cols &&
        board[nx + dx][ny + dy] !== "D"
      ) {
        nx += dx;
        ny += dy;
      }

      if (!visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, count + 1]);
      }
    }
  }

  return -1;
}
