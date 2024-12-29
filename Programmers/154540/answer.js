console.log(solution(["X591X","X1X5X","X231X", "1XXX1"]));

function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  const dfs = (x, y) => {
    let count = Number(maps[x][y]);
    visited[x][y] = true;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && !visited[nx][ny] && maps[nx][ny] !== "X") {
        count += dfs(nx, ny);
      }
    }

    return count;
  }

  const result = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maps[i][j] !== "X" && !visited[i][j]) {
        result.push(dfs(i, j));
      }
    }
  }

  return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
}