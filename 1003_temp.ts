const fs = require('fs');
const [caseLength, ...rest] = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
const cases = [...rest];

const fibonacciArrayPrintZero = new Array(40);
const fibonacciArrayPrintOne = new Array(40);

fibonacciArrayPrintZero[0] = 1;
fibonacciArrayPrintZero[1] = 0;
fibonacciArrayPrintOne[0] = 0;
fibonacciArrayPrintOne[1] = 1;

for (let i = 2; i < 40; i++) {
    fibonacciArrayPrintZero[i] = fibonacciArrayPrintZero[i-1] + fibonacciArrayPrintZero[i-2];
    fibonacciArrayPrintOne[i] = fibonacciArrayPrintOne[i-1] + fibonacciArrayPrintOne[i-2];
};

cases.map((c) => console.log(`${fibonacciArrayPrintZero[c]} ${fibonacciArrayPrintOne[c]}`));