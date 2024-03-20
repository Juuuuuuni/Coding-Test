const fs = require('fs');
const [sequenceLength, sequenceString] = fs.readFileSync('/dev/stdin').toString().split('\n');
const sequenceList = sequenceString.split(" ").map(Number);

const LIS = [sequenceList[0]];


const binarySearch = (target, array) => {
    let lt = 0;
    let rt = array.length - 1;

    while (lt <= rt) {
        let mid = Math.floor((lt+rt)/2);

        if (array[mid] === target) return mid;
        else if (array[mid] < target) lt = mid + 1;
        else rt = mid - 1;
    }

    return lt;
}

for (let num of sequenceList) {
    if (LIS[LIS.length - 1] < num) {
        LIS.push(num);
    } else {
        let idx = binarySearch(num, LIS);
        LIS[idx] = num;
    }
}

console.log(LIS.length);