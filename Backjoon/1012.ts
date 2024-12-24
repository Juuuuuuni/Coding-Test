const input =
  "2\n10 8 17\n0 0\n1 0\n1 1\n4 2\n4 3\n4 5\n2 4\n3 4\n7 4\n8 4\n9 4\n7 5\n8 5\n9 5\n7 6\n8 6\n9 6\n10 10 1\n5 5".split(
    "\n",
  );

const testCaseCount = input.shift();

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

for (let i = 0; i < testCaseCount; i++) {
  const [M, N, coordinateCount] = input.shift().split(" ").map(Number);

  const coordinates = [];

  for (let j = 0; j < coordinateCount; j++) {
    coordinates.push(input.shift().split(" ").map(Number));
  }

  const matrix = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  const dfs = (x, y) => {
    if (visited[x][y] === false && matrix[x][y] === 1) {
      visited[x][y] = true;

      for (let i = 0; i < 4; i++) {
        const [newX, newY] = [x + dx[i], y + dy[i]];

        if (newX >= 0 && newX < N && newY >= 0 && newY < M) {
          dfs(newX, newY);
        }
      }
    }
  };

  coordinates.forEach(([x, y]) => {
    matrix[y][x] = 1;
  });

  let answer = 0;
  coordinates.forEach(([x, y]) => {
    if (visited[y][x] === false && matrix[y][x] === 1) {
      dfs(y, x);
      answer++;
    }
  });

  console.log(answer);
}
