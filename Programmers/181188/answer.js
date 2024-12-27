
console.log(solution([[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]]));
function solution(targets) {
  let answer = 0;
  targets.sort((a, b) => b[0] - a[0]);

  let checkPoint = targets.shift()[0];
  answer = 1;

  targets.forEach(target => {
    const [start, end] = target;

    if (end <= checkPoint) {
      answer++;
      checkPoint = start;
    }
  });

  return answer;
}