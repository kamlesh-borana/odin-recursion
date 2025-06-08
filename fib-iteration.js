// function fibs(numCount) {
//   const result = [];
//   let a = 0;
//   let b = 1;

//   for (let i = 1; i <= numCount; i++) {
//     if (i === 1) {
//       result.push(a);
//     } else if (i === 2) {
//       result.push(b);
//     } else {
//       const c = a + b;
//       result.push(c);
//       a = b;
//       b = c;
//     }
//   }

//   return result;
// }

// console.log(fibs(8));

function fibs(numCount) {
  if (numCount <= 0) {
    return [];
  } else if (numCount === 1) {
    return [0];
  } else {
    const result = [0, 1];

    for (let i = 2; i < numCount; i++) {
      result.push(result[i - 2] + result[i - 1]);
    }

    return result;
  }
}

console.log(fibs(8));
console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(10));
