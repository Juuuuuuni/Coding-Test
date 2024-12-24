
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(" ").map(Number);

const fullPieceCount = [1, 1, 2, 2, 2, 8];
const shortfall = fullPieceCount.map((piece, index) => piece - input[index]);
console.log(shortfall.join(" "));