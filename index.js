"use strict";
import _ from "lodash";

const arr = [23, 1, 3, 65, 3, 2, 34, 4];

const bubbleSort = (arr) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const item = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = item;
        swapped = true;
      }
    }
    arr.length - 1;
  } while (swapped);
  return arr;
};

console.log(bubbleSort(arr));
