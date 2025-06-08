function merge(list1 = [], list2 = []) {
  const mergedList = [];

  let list1Index = 0;
  let list2Index = 0;

  while (list1Index < list1.length && list2Index < list2.length) {
    if (list1[list1Index] < list2[list2Index]) {
      mergedList.push(list1[list1Index]);
      list1Index++;
    } else {
      mergedList.push(list2[list2Index]);
      list2Index++;
    }
  }

  while (list1Index < list1.length) {
    mergedList.push(list1[list1Index]);
    list1Index++;
  }

  while (list2Index < list2.length) {
    mergedList.push(list2[list2Index]);
    list2Index++;
  }

  return mergedList;
}

function mergeSort(list = []) {
  if (list.length <= 1) {
    return list;
  }

  const middle = Math.floor(list.length / 2);

  const leftSortedHalf = mergeSort(list.slice(0, middle));
  const rightSortedHalf = mergeSort(list.slice(middle));

  return merge(leftSortedHalf, rightSortedHalf);
}

// function mergeSort(list, start = 0, end = list.length - 1) {
//   if (start >= end) {
//     return list;
//   }

//   const mid = Math.floor((start + end) / 2);

//   const leftSortedHalf = mergeSort(list.slice(start, mid + 1));
//   const rightSortedHalf = mergeSort(list.slice(mid + 1));

//   const mergedList = [];
//   let i = 0;
//   let j = 0;
//   for (let k = 0; k < list.length; k++) {
//     if (!Number.isInteger(leftSortedHalf[i])) {
//       mergedList.push(rightSortedHalf[j]);
//       j++;
//       continue;
//     }
//     if (!Number.isInteger(rightSortedHalf[j])) {
//       mergedList.push(leftSortedHalf[i]);
//       i++;
//       continue;
//     }
//     if (leftSortedHalf[i] <= rightSortedHalf[j]) {
//       mergedList.push(leftSortedHalf[i]);
//       i++;
//     } else {
//       mergedList.push(rightSortedHalf[j]);
//       j++;
//     }
//   }

//   return mergedList;
// }

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
