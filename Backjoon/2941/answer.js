const fs = require("fs");
const inputs = fs.readFileSync("./input.txt").toString().trim();

const croAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let modifiedInputs = inputs;
croAlphabet.forEach(
  (alpha) => (modifiedInputs = modifiedInputs.split(alpha).join("*")),
);

console.log(modifiedInputs.length);
