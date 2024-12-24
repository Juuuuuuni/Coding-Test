const fs = require("fs");

const gradeTable = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

const inputs = fs.readFileSync("./input.txt").toString().trim().split("\n");
const reportCard = inputs.reduce((acc, cur) => {
  const [_, grade, gradePoint] = cur.split(" ");
  if (gradePoint === "P") return acc;

  acc.push([Number(grade), gradeTable[gradePoint]]);
  return acc;
}, []);

const { totalGradePointSum, totalGradeSum } = reportCard.reduce(
  (acc, cur) => {
    const [grade, gradePoint] = cur;
    const gradePointResult = grade * gradePoint;
    return {
      totalGradePointSum: acc.totalGradePointSum + gradePointResult,
      totalGradeSum: acc.totalGradeSum + grade,
    };
  },
  { totalGradePointSum: 0, totalGradeSum: 0 },
);

console.log(totalGradePointSum / totalGradeSum);
