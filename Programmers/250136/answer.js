solution([
  [1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0],
  [1, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1],
]);

function solution(land) {
  const rowCount = land.length;
  const columnCount = land[0].length;
  const visited = Array.from({ length: rowCount }, () =>
    Array.from({ length: columnCount }, () => false),
  );
  const oilColumns = Array.from({ length: columnCount }, () => 0);
  const directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  console.log("visited: ", visited);

  const bfs = (startRow, startColumn) => {
    const queue = [[startRow, startColumn]];
    visited[startRow][startColumn] = true;
    let count = 1;

    const columns = new Set();

    columns.add(startColumn);

    while (queue.length > 0) {
      const [row, column] = queue.shift();

      directions.forEach((direction) => {
        const [r, c] = direction;
        const nextRow = row + r;
        const nextColumn = column + c;

        // console.log("nextRow: ", nextRow);
        // console.log("nextColumn: ", nextColumn);
        if (
          nextRow >= 0 &&
          nextRow < rowCount &&
          nextColumn >= 0 &&
          nextColumn < columnCount &&
          land[nextRow][nextColumn] === 1 &&
          !visited[nextRow][nextColumn]
        ) {
          count++;
          columns.add(nextColumn);
          visited[nextRow][nextColumn] = true;
          queue.push([nextRow, nextColumn]);
        }
      });
    }

    columns.forEach((col) => (oilColumns[col] += count));
  };

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      if (land[i][j] === 1 && !visited[i][j]) {
        bfs(i, j);
      }
    }
  }

  return Math.max(...oilColumns);
}
