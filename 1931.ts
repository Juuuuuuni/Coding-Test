/*
* https://www.acmicpc.net/problem/1931
*
* 시작 시간이 빠르고 회의 시간이 적은 회의 식별 (x)
* 끝나는 시간 빠른 순서대로 회의를 진행한다.
* 다음 회의의 회의 시작시간이 이전 회의의 끝나는 시간보다 이른 경우는 패스
* 같거나 늦은 경우에는 다음 미팅을 진행한다.
* 모든 회의를 확인 한 후 진행한 미팅의 갯수를 확인한다,
* 시간 복잡도: O(nlogn)
* 공간 복잡도: O(n)
*
*
* */

const fs = require('fs');

const [_, ...meetingTimeRangesString] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 끝나는 시간을 기준으로 오름차순으로 정렬
const meetingTimeRanges = [...meetingTimeRangesString]
    .map(s => s.split(" ").map(Number))
    .sort(([prevStartTime, prevEndTime], [curStartTime, curEndTime]) =>
        prevEndTime === curEndTime ? prevStartTime - curStartTime :prevEndTime - curEndTime
    );

// 현재 진행중인 회의의 끝나는 시간
let endTimeOfCurrentMeetingInProgress = 0;

const totalCount = meetingTimeRanges.reduce((acc, cur) => {
    const [startTimeOfMeeting, endTimeOfMeeting] = cur;

    if (startTimeOfMeeting < endTimeOfCurrentMeetingInProgress) return acc;

    endTimeOfCurrentMeetingInProgress = endTimeOfMeeting;
    acc += 1;

    return acc;
}, 0);


console.log(totalCount);

