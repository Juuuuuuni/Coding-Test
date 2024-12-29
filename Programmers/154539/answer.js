console.log(solution([9, 1, 5, 3, 6, 2]));

function solution(numbers) {
  const result = Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    // 스택의 마지막 원소가 현재 숫자보다 작으면 결과 업데이트
    console.log("stack: ", stack);
    console.log("numbers[stack[stack.length - 1]]: ", numbers[stack[stack.length - 1]]);
    console.log("numbers[i]: ", numbers[i]);
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      const idx = stack.pop();
      console.log("idx: ", idx);

      result[idx] = numbers[i];
      console.log("result: ", result);
    }
    // 현재 인덱스를 스택에 추가
    stack.push(i);
  }

  console.log("result: ", result);
  return result;
}