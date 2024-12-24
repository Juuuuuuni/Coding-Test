const fs = require("fs");
const [NM, ...matrix] = fs.readFileSync("./input.txt").toString().trim().split("\n").map(a => a.split(" "));
const [N, M] = NM.map(Number);

const matrixAB = [];

for (let i = 0; i < N; i++) {
  const matrixA = matrix[i].map(Number);
  const matrixB = matrix[i + N].map(Number);
  const matrixABElement = [];

  for (let j = 0; j < M; j++) {
    matrixABElement[j] = matrixA[j] + matrixB[j];
  }

  matrixAB.push(matrixABElement);
}

matrixAB.map(element => console.log(element.join(" ")));

