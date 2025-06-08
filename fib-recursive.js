// function fibs(num) {
//   if (num === 1) {
//     return 0;
//   }

//   if (num === 2) {
//     return 1;
//   }

//   return fibs(num - 2) + fibs(num - 1);
// }

// function fibsRec(numCount) {
//   const result = [];

//   for (let i = 1; i <= numCount; i++) {
//     result.push(fibs(i));
//   }

//   return result;
// }

// console.log(fibsRec(43));

// function fibsRec(numCount, result = [], isInitial = true) {
//   console.log("This was printed recursively"); //13

//   if (Number.isInteger(result[numCount - 1])) {
//     return result[numCount - 1];
//   }

//   if (numCount === 1) {
//     result[numCount - 1] = 0;
//     return 0;
//   }

//   if (numCount === 2) {
//     result[numCount - 2] = 0;
//     result[numCount - 1] = 1;
//     return 1;
//   }

//   const sum =
//     fibsRec(numCount - 1, result, false) + fibsRec(numCount - 2, result, false);
//   result[numCount - 1] = sum;

//   if (!isInitial) {
//     return sum;
//   }

//   return result;
// }

// console.log(fibsRec(8));

function fibsRec(numCount, a = 0, b = 1, list = []) {
  console.log("This was printed recursively");

  if (numCount <= 0) {
    return list;
  }

  list.push(a);

  return fibsRec(numCount - 1, b, a + b, list);
}

// function fibsRec(numCount, list = [0, 1]) {
//   console.log("This was printed recursively");

//   if (numCount <= 0) {
//     return [];
//   }

//   if (numCount === 1) {
//     return [list[0]];
//   }

//   if (numCount === 2) {
//     return list;
//   }

//   const listLength = list.length;

//   list.push(list[listLength - 2] + list[listLength - 1]);

//   return fibsRec(numCount - 1, list);
// }

console.log(fibsRec(8));
console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(10));
