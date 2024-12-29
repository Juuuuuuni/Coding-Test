
console.log(solution([
  ["15:00", "16:00"],
  ["12:10", "14:55"],
  ["15:30", "15:40"],
  ["16:10", "18:00"],
]));

function solution(book_time) {
  var answer = 0;

  const timeToMinute = (stringTime) => {
    const [hour, minute] = stringTime.split(":").map(Number);
    return hour * 60 + minute;
  };

  // 입실, 퇴실 시간을 분 단위로 변환 후 입실 시간 기준 정렬
  const minuteBookTime = book_time
    .map(time => [timeToMinute(time[0]), timeToMinute(time[1]) + 10])
    .sort((a, b) => a[0] - b[0]);

  let checkOutTimes = [];

  for (const [checkInTime, checkOutTime] of minuteBookTime) {
    // 가장 빠른 체크아웃 시간이 현재 체크인 시간 이전인지 확인
    checkOutTimes = checkOutTimes.filter(time => time > checkInTime);

    // 체크아웃 시간이 여전히 존재한다면 방을 추가하지 않아도 됨
    checkOutTimes.push(checkOutTime);

    // 체크아웃 시간을 정렬 (최소값을 항상 앞에 유지)
    checkOutTimes.sort((a, b) => a - b);

    // 필요한 방의 수는 현재 체크아웃 시간 배열의 크기와 동일
    answer = Math.max(answer, checkOutTimes.length);
  }

  return answer;
}

// 다른 사람이 푼 방법 중 신박한 방법
function makeMinStamp(time) {
  const [hour, min] = time.split(":").map(v => Number(v));
  return hour * 60 + min;
}

function solutionTwo(book_time) {
  const timeArr = Array.from({ length: makeMinStamp('23:59') + 10 }, () => 0);

  console.log(timeArr)

  book_time.forEach((time, i) => {
    const [s, e] = time;
    let start = makeMinStamp(s);
    const end = makeMinStamp(e) + 9;

    for (start; start <= end; start++) {
      timeArr[start]++;
    }
  });

  return Math.max(...timeArr);
}