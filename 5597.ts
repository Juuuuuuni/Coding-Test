/*
* length가 30인 array를 생성
* 제출한 학생번호를 순회하면서 해당 인덱스(학생번호 - 1)에 1을 채운다
* 다 채운 후 array를 순회하면서 1이 아닌 index의 + 1을 출력한다.
*
* */
// const fs = require('fs');
// const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const inputs = [
    3,
    1,
    4,
    5,
    7,
    9,
    6,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
];

const submittedAssignments = Array(30).fill(0);

inputs.forEach(input => submittedAssignments[input - 1] = 1);

submittedAssignments.forEach((s, index) => {
    if (s !== 1) console.log(index + 1);
})
