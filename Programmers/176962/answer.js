console.log(
  solution([
    ["korean", "11:40", "30"],
    ["english", "12:10", "20"],
    ["math", "12:30", "40"],
  ]),
);
console.log(
  solution([
    ["science", "12:40", "50"],
    ["music", "12:20", "40"],
    ["history", "14:00", "30"],
    ["computer", "12:30", "100"],
  ]),
);

function solution(plans) {
  var answer = [];

  const sortedPlans =   plans
    .map(([name, start, playTime]) => [
      name,
      convertToNumberMinute(start),
      Number(playTime),
    ]).sort((a, b) => a[1] - b[1]);

  const delayedHomeworks = [];

  while (sortedPlans.length) {
    const currentHomework = sortedPlans.shift();
    const [name, start, playTime] = currentHomework;

    if (sortedPlans.length === 0) {
      answer.push(name);
      break;
    }
    const [_, nextStart] = sortedPlans[0];

    const diff = nextStart - start;

    if (diff < playTime)
      delayedHomeworks.push([name, playTime - diff]);
    else {
      answer.push(name);
      let restTime = diff - playTime;

      while (restTime > 0) {
        if (delayedHomeworks.length === 0) break;

        const [name, restPlayTime] = delayedHomeworks.pop();

        if (restTime < restPlayTime) {
          delayedHomeworks.push([name, restPlayTime - restTime]);
          restTime = 0;
        } else {
          restTime = restTime - restPlayTime;
          answer.push(name);
        }
      }
    }
  }

  delayedHomeworks.reverse().forEach((homework) => answer.push(homework[0]));

  return answer;
}

function convertToNumberMinute(stringTime) {
  const [hour, minute] = stringTime.split(":").map(Number);
  return hour * 60 + minute;
}

