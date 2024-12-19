const fs = require("fs");

const matrix = fs.readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  // 정수인데 Number 처리 안하고 제출해서 틀렸음... 정수인지 문자인지 정확한 타입 처리 필요
  .map(a => a.split(" ").map(Number));

const result = matrix.reduce((acc, cur, currentRow) => {
  cur.forEach((value, currentColumn) => {
    if (value >= acc.max) {
      acc = { max: value, row: currentRow + 1, column: currentColumn + 1 };
    }
  })

  return acc;
}, { max: 0, row: 0, column: 0 });

console.log(result.max);
console.log(`${result.row} ${result.column}`);