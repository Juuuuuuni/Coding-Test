console.log(solution([["korean", "11:40", "30"], ["english", "12:10", "20"], ["math", "12:30", "40"]]));
console.log(solution([["science", "12:40", "50"], ["music", "12:20", "40"], ["history", "14:00", "30"], ["computer", "12:30", "100"]]));

function solution(plans) {
  var answer = [];

  // start값으로 오름차순 정렬
  plans.sort((a, b) => {
    const aStartMinuteTime = convertToNumberMinute(a[1]);
    const bStartMinuteTime = convertToNumberMinute(b[1]);

    return aStartMinuteTime - bStartMinuteTime;
  });

  const delayedHomeworks = [];
  while (plans.length) {
    const currentHomework = plans.shift();
    const [name, start, playTime] = currentHomework;

    if (plans.length === 0) {
      console.log("3. name: ", name);
      answer.push(name);
      break;
    }
    const [nextName, nextStart, nextPlayTime] = plans[0];
    const startMinuteTime = convertToNumberMinute(start);
    const nextStartMinuteTime = convertToNumberMinute(nextStart);

    const diff = nextStartMinuteTime - startMinuteTime;

    if (diff < Number(playTime)) delayedHomeworks.push([name, Number(playTime) - diff]);
    else {
      answer.push(name);
      let restTime = diff - Number(playTime);
      while (restTime > 0) {
        if (delayedHomeworks.length === 0) break;
        const [name, restPlayTime] = delayedHomeworks.pop();
        if (restTime < restPlayTime) {
          delayedHomeworks.push([name, restPlayTime - restTime]);
          restTime = 0;
        }
        else {
          restTime = restTime - restPlayTime;
          answer.push(name);
        }
      }
    }
  }

  delayedHomeworks.reverse().forEach(homework => answer.push(homework[0]));


  return answer;
}

function convertToNumberMinute(stringTime) {
  const [hour, minute] = stringTime.split(":");
  return Number(hour) * 60 + Number(minute);
}