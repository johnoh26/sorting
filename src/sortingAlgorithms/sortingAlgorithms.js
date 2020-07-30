/********************** MERGE SORT **********************/
export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([j - 1, j - 1]);
    animations.push([j - 1, j - 1]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([i - 1, i - 1]);
    animations.push([i - 1, i - 1]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

/********************** BUBBLE SORT **********************/
export function getBubbleSortAnimations(array) {
  const animations = [];
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; ++i) {
      if (array[i] > array[i + 1]) {
        animations.push([i, i + 1]);
        animations.push([i, i + 1]);
        animations.push([i, array[i + 1]]);
        animations.push([i + 1, array[i]]);
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        isSorted = false;
      }
    }
    counter++;
  }
  return animations;
}

/********************** QUICK SORT **********************/
export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(array, startIdx, endIdx, animations) {
  if (startIdx > endIdx) {
    return;
  }
  let pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;
  while (rightIdx >= leftIdx) {
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      animations.push([leftIdx, rightIdx]);
      animations.push([leftIdx, rightIdx]);
      animations.push([leftIdx, array[rightIdx]]);
      animations.push([rightIdx, array[leftIdx]]);
      let temp = array[leftIdx];
      array[leftIdx] = array[rightIdx];
      array[rightIdx] = temp;
    }
    if (array[leftIdx] <= array[pivotIdx]) {
      animations.push([leftIdx, leftIdx]);
      animations.push([leftIdx, leftIdx]);
      animations.push([leftIdx, array[leftIdx]]);
      animations.push([leftIdx, array[leftIdx]]);
      leftIdx++;
    }
    if (array[rightIdx] >= array[pivotIdx]) {
      animations.push([rightIdx, rightIdx]);
      animations.push([rightIdx, rightIdx]);
      animations.push([rightIdx, array[rightIdx]]);
      animations.push([rightIdx, array[rightIdx]]);
      rightIdx--;
    }
  }

  animations.push([rightIdx, pivotIdx]);
  animations.push([rightIdx, pivotIdx]);
  animations.push([rightIdx, array[pivotIdx]]);
  animations.push([pivotIdx, array[rightIdx]]); // make the pivot purple
  let temp = array[rightIdx];
  array[rightIdx] = array[pivotIdx];
  array[pivotIdx] = temp;

  let leftSubarrayIsShorter = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1); // + / - 1 around rightIdx because pivot is at rightIdx
  if (leftSubarrayIsShorter) {
    quickSortHelper(array, startIdx, rightIdx - 1, animations);
    quickSortHelper(array, rightIdx + 1, endIdx, animations);
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx, animations);
    quickSortHelper(array, startIdx, rightIdx - 1, animations);
  }
  return animations;
}

/********************** HEAP SORT **********************/
export function getHeapSortAnimations(array) {
  const animations = [];
  buildMaxHeap(array, animations);
  for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
    animations.push([endIdx, 0]);
    animations.push([endIdx, 0]);
    animations.push([endIdx, array[0]]);
    animations.push([0, array[endIdx]]);
    swap(0, endIdx, array);
    siftDown(0, endIdx - 1, array, animations);
  }
  return animations;
}

function buildMaxHeap(array, animations) {
  let firstParentIdx = Math.floor((array.length - 2) / 2);
  for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
    siftDown(currentIdx, array.length - 1, array, animations);
  }
}

function siftDown(currentIdx, endIdx, heap, animations) {
  let childOneIdx = currentIdx * 2 + 1;
  while (childOneIdx <= endIdx) {
    const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
    let idxToSwap;
    if (childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]) {
      idxToSwap = childTwoIdx;
    } else {
      idxToSwap = childOneIdx;
    }

    animations.push([idxToSwap, currentIdx]);
    animations.push([idxToSwap, currentIdx]);

    if (heap[idxToSwap] > heap[currentIdx]) {
      animations.push([idxToSwap, heap[currentIdx]]);
      animations.push([currentIdx, heap[idxToSwap]]);

      swap(currentIdx, idxToSwap, heap);
      currentIdx = idxToSwap;
      childOneIdx = currentIdx * 2 + 1;
    } else {
      animations.push([idxToSwap, heap[idxToSwap]]);
      animations.push([idxToSwap, heap[idxToSwap]]);
      return;
    }
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
