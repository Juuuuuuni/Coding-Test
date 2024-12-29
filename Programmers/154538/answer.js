console.log(solution(10,40,	5));

function solution(x, y, n) {
  let count = 0
  let test = [x]

  if (x === y) return 0

  while (true) {
    count++

    const set = new Set()
    test.forEach(item => {
      if (item + n <= y) set.add(item + n)
      if (item * 2 <= y) set.add(item * 2)
      if (item * 3 <= y) set.add(item * 3)
    })

    if (set.size === 0) return -1

    if (set.has(y)) {
      return count
    }

    test = set
  }
}