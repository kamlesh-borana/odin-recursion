// function largestPrimeFactor(
//   num,
//   checkNum = Math.floor(num / 2),
//   primeFactorList = []
// ) {
//   if (num <= 1) {
//     return primeFactorList;
//   }

//   if (num % checkNum === 0) {
//     primeFactorList.push(checkNum);
//     num /= checkNum;
//   }

//   return largestPrimeFactor(num, checkNum - 1, primeFactorList);
// }

function largestPrimeFactor(num, checkNum = 2, primeFactorList = []) {
  if (num <= 1) {
    return primeFactorList[primeFactorList.length - 1];
  }

  if (num % checkNum === 0) {
    primeFactorList.push(checkNum);
    num /= checkNum;
  } else {
    checkNum++;
    if (checkNum % 2 === 0) {
      checkNum++;
    }
  }

  return largestPrimeFactor(num, checkNum, primeFactorList);
}

console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(600851475143));
