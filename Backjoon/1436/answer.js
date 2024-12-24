const fs = require("fs");
const N = Number(fs.readFileSync("./input.txt").toString().trim());


let num = 666;
let count = 0;

while (true) {
  if (String(num).includes("666")){
    count++;
  }

  if (count === N) {
    console.log(num);
    break;
  }

  num++;
}