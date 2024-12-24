const fs = require("fs");
const target = fs.readFileSync("./input.txt").toString();

const numericTarget = Number(target);
let min = 0;
let i = numericTarget - Number(target.length) * 9;

while (i < numericTarget) {
  let result = i;
  for (const element of String(i)) {
    result += Number(element);
  }

  if (numericTarget === result) {
    min = i;
    break;
  }

  i++;
}

console.log(min);
