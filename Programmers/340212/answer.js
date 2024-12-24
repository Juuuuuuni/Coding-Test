
//   [1, 5, 3]	[2, 4, 7]	30	3
//   [1, 4, 4, 2]	[6, 3, 8, 2]	59	2
//   [1, 328, 467, 209, 54]	[2, 7, 1, 4, 3]	1723	294
//   [1, 99999, 100000, 99995]	[9999, 9001, 9999, 9001]	3456789012	39354

console.log(solution([1, 5, 3], [2, 4, 7], 30, 3));

function solution(diffs, times, limit) {
  let minLevel = getMin(diffs);
  let maxLevel = getMax(diffs);

  while (minLevel <= maxLevel) {
    let midLevel = Math.floor((minLevel + maxLevel) / 2);
    const time = calculateTime(diffs, times, midLevel);

    if (time === limit) {
      return midLevel;
    }
    else if (time > limit) {
      minLevel = midLevel + 1;
    }
    else {
      maxLevel = midLevel - 1;
    }
  }
  return minLevel;
}

function calculateTime(diffs, times, level) {
  let sumTimes = 0;

  diffs.map((diff, index) => {
    if (diff <= level) {
      sumTimes += times[index];
    }
    else {
      const tryTimes = diff - level;
      const timeToSolvingPrevAndCur = index > 0 ?
        times[index] + times[index - 1]
        : times[index];

      sumTimes += timeToSolvingPrevAndCur * tryTimes + times[index];
    }
  });

  return sumTimes;
}


function getMax(arr) {
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

function getMin(arr) {
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}