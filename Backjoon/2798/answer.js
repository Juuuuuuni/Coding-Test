const fs = require("fs");
const [NM, cards] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.split(" ").map(Number));
const [N, M] = NM;

let max = 0;
for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = cards[i] + cards[j] + cards[k];

      if (sum <= M && max < sum) max = sum;
    }
  }
}

console.log(max);
