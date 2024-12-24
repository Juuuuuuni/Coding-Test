const fs = require("fs");
const [subjectCount, points] = fs.readFileSync("./input.txt").toString().trim().split("\n");
const pointsArray = points.split(" ").map(Number);

const M = Math.max(...pointsArray);

const newPointsSum = pointsArray.reduce((acc, cur) => {
  const newPoint = cur/M*100;
  acc += newPoint;
  return acc;
}, 0);

console.log(newPointsSum / pointsArray.length);