/*
* https://www.acmicpc.net/problem/1541
* + / - 만 사용할 수 있는 주어진 수식에 적절히 괄호를 삽입하여 최소값이 나오게 해야한다.
* 최소값이 나오려면 ?
* 최대의 값을 빼야함
* 최소의 값을 더해야함
* - 부호를 기준 나눈 수식을 다 더한 후 첫번째 수식에서 얻어진 값을 빼주면 된다.
*
* 시간 복잡도: O(n)
* 공간 복잡도: O(n)
*
* */

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
const expressionToValueFunc = (expression) => expression.split("+").map(Number).reduce((a, b) => a + b, 0);

const expressionArray = input.split("-");
const expressionCount = expressionArray.length;
const firstValue = expressionToValueFunc(expressionArray[0]);
let answer = expressionToValueFunc(expressionArray[0]);

if (expressionCount > 0) {
    let maxValue = 0;
    for (let i = 1; i < expressionCount; i++) {
        maxValue += expressionToValueFunc(expressionArray[i]);
    }

    answer = firstValue - maxValue;
}


console.log(answer);