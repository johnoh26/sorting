// function getHeapSortAnimations(array) {
//   const animations = [];
//   buildMaxHeap(array, animations);
//   console.log('array >>>', array);
//   // for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
//   //   animations.push([endIdx, 0]);
//   //   animations.push([endIdx, 0]);
//   //   animations.push([endIdx, array[0]]);
//   //   animations.push([0, array[endIdx]]);
//   //   swap(0, endIdx, array);
//   //   siftDown(0, endIdx - 1, array, animations);
//   // }
//   return animations;
// }

// function buildMaxHeap(array, animations) {
//   let firstParentIdx = Math.floor((array.length - 2) / 2);
//   for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
//     siftDown(currentIdx, array.length - 1, array, animations);
//   }
// }

// function siftDown(currentIdx, endIdx, heap, animations) {
//   console.log('heap >>>', heap);
//   let childOneIdx = currentIdx * 2 + 1;
//   while (childOneIdx <= endIdx) {
//     const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
//     let idxToSwap;
//     if (childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]) {
//       idxToSwap = childTwoIdx;
//     } else {
//       idxToSwap = childOneIdx;
//     }

//     animations.push([idxToSwap, currentIdx]);
//     animations.push([idxToSwap, currentIdx]);

//     if (heap[idxToSwap] > heap[currentIdx]) {
//       animations.push([idxToSwap, heap[currentIdx]]);
//       animations.push([currentIdx, heap[idxToSwap]]);

//       swap(currentIdx, idxToSwap, heap);
//       currentIdx = idxToSwap;
//       childOneIdx = currentIdx * 2 + 1;
//     } else {
//       animations.push([idxToSwap, currentIdx]);
//       animations.push([idxToSwap, currentIdx]);
//       return;
//     }
//   }
// }

// function swap(i, j, array) {
//   const temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }

// console.log(getHeapSortAnimations([15, 14, 13, 12, 11]));
