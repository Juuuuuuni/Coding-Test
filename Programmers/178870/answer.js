
console.log(solution([1, 2, 3, 4, 5],	7));
console.log(solution([1, 1, 1, 2, 3, 4, 5], 5));
console.log(solution([2, 2, 2, 2, 2], 6));

function solution(sequence, k) {
  const answer = [0, Infinity];
  let start = 0;
  let end = 0;
  let sum = sequence[0];

  while (start < sequence.length && end < sequence.length) {
    if (sum < k) {
      end++;
      sum += sequence[end];
    }
    else if (sum === k) {
      if (answer[1] - answer[0] > end - start) {
        answer[0] = start;
        answer[1] = end;
      }

      sum -= sequence[start];
      start++;
    }
    else if (sum > k) {
      sum -= sequence[start];
      start++;

    }
  }

  return answer;
}