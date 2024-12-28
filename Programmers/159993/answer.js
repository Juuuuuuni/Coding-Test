console.log(solution(["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"]));

function solution(maps) {
  var answer = 0;

  const rows = maps.length;
  const cols = maps[0].length;

  let start = null;
  let exit = null;
  let lever = null;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maps[i][j] === "S") start = [i, j];
      if (maps[i][j] === "E") exit = [i, j];
      if (maps[i][j] === "L") lever = [i, j];
    }
  }

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const visitedForLever = Array.from({ length: rows }, () => Array(cols).fill(false));
  const queueForLever = [[...start, 0]];
  visitedForLever[start[0]][start[1]] = true;

  let countToLever = 0;
  while (queueForLever.length) {
    const [x, y, count, isLeverActived] = queueForLever.shift();

    if (x === lever[0] && y === lever[1]) {
      countToLever = count;
      break;
    }

    for (const [dx, dy] of directions) {
      let nx = x;
      let ny = y;

      if (
        nx + dx >= 0 &&
        nx + dx < rows &&
        ny + dy >= 0 &&
        ny + dy < cols &&
        maps[nx + dx][ny + dy] !== "X"
      ) {
        nx += dx;
        ny += dy;

        if (!visitedForLever[nx][ny]) {
          visitedForLever[nx][ny] = true;

          queueForLever.push([
            nx,
            ny,
            count + 1,
          ]);
        }
      }
    }
  }

  if (countToLever === 0) return -1;

  const visitedForExit = Array.from({ length: rows }, () => Array(cols).fill(false));
  const queueForExit = [[...lever, 0]];
  visitedForExit[lever[0]][lever[1]] = true;

  while (queueForExit.length) {
    const [x, y, count] = queueForExit.shift();

    if (x === exit[0] && y === exit[1]) return count + countToLever;

    for (const [dx, dy] of directions) {
      let nx = x;
      let ny = y;

      if (
        nx + dx >= 0 &&
        nx + dx < rows &&
        ny + dy >= 0 &&
        ny + dy < cols &&
        maps[nx + dx][ny + dy] !== "X"
      ) {
        nx += dx;
        ny += dy;

        if (!visitedForExit[nx][ny]) {
          visitedForExit[nx][ny] = true;

          queueForExit.push([
            nx,
            ny,
            count + 1,
          ]);
        }
      }
    }
  }


  return -1;
}