const fs = require("fs");
let sugarKg = Number(fs.readFileSync("./input.txt").toString().trim());

let count = 0;

while (sugarKg >= 0) {
  if (sugarKg % 5 === 0) {
    count += sugarKg / 5; // 5kg 봉지로 나누어 떨어지면, 그만큼 봉지 수에 더함
    console.log(count);
    return;
  }
  sugarKg -= 3; // 3kg 봉지를 하나씩 줄여나감
  count++; // 3kg 봉지 하나 추가
}
console.log(-1);
