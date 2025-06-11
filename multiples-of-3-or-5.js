function sumOfMultiples(num1, num2, endNumber, sum = 0) {
  endNumber--;

  if (endNumber <= 0) {
    return sum;
  }

  if (endNumber % num1 === 0 || endNumber % num2 === 0) {
    sum = sum + endNumber;
  }

  return sumOfMultiples(num1, num2, endNumber, sum);
}

console.log(sumOfMultiples(3, 5, 1000));
