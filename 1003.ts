/*
*
* f(0) : 0 출력, 0 리턴 => 1 0
* f(1) : 1 출력, 1 리턴 => 0 1
*
* n >= 2
*
* f(n) = f(n-1) + f(n-2)
*
* f(2) = f(1) + f(0) : 1 1
* f(3) = f(2) + f(1) : 1 2
* f(4) = f(3) + f(2) : 2 3
* f(5) = f(4) + f(3) : 3 5
* f(6) = f(5) + f(4) : 5 8
* => n >= 2,  계차가 등차인 수열의 합
*
* 길이가 N인 배열을 만들어서 점화식을 통해 값을 대입해놓고 입력된 값으로 꺼내 출력한다.
* 시간 복잡도 O(n)
* 공간 복잡도 O(2n) => O(n)
*
*
* */

const fs = require('fs');
const [caseLength, ...rest] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const cases = rest.map(Number);
const max = Math.max(...cases);

const fibonacciArray = Array(max);

fibonacciArray[0] = [1, 0];
fibonacciArray[1] = [0, 1];

for (let i = 2; i <= max; i++) {
    const prev = fibonacciArray[i - 1];
    const prevPrev = fibonacciArray[i - 2];
    fibonacciArray[i] = [prev[0] + prevPrev[0], prev[1] + prevPrev[1]];
}

cases.map((c) => console.log(`${fibonacciArray[c][0]} ${fibonacciArray[c][1]}`));