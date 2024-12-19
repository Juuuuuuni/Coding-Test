const chessBoardW = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const chessBoardB = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const fs = require("fs");
const [NM, ...chessBoard] = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [N, M] = NM.split(" ").map(Number);



// const nToNBoard = chessBoard.slice(0, n).map(row => row.slice(0, n));

let min = Infinity;
for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    const subBoard = chessBoard.slice(i, i + 8).map(row => row.slice(j, j + 8).split(""));

    const countDiffWithWBoard = compareChessBoard(subBoard, chessBoardW);
    const countDiffWithBBoard = compareChessBoard(subBoard, chessBoardB);

    if (min > Math.min(countDiffWithBBoard, countDiffWithWBoard)) min = Math.min(countDiffWithBBoard, countDiffWithWBoard);
  }
}

console.log(min);

function compareChessBoard (targetBoard, chessBoard) {
  let count = 0;
  targetBoard.map((row, rowIndex) => {
    row.map((column, columnIndex) => {
      if (column !== chessBoard[rowIndex][columnIndex]) count++;
    })
  })

  return count;
}