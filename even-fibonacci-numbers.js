function evenFibonacciNumbersSum(limit, a = 0, b = 1, sum = 0) {
  const nextFibsTerm = a + b;

  if (nextFibsTerm > limit) {
    return sum;
  }

  if (nextFibsTerm % 2 === 0) {
    sum += nextFibsTerm;
  }

  return evenFibonacciNumbersSum(limit, b, nextFibsTerm, sum);
}

console.log(evenFibonacciNumbersSum(4000000));
