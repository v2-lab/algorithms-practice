/**
 * Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
 */

const pair_with_targetsum = (arr, target_sum) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const currentSum = arr[left] + arr[right];

    if (currentSum === target_sum) {
      return [left, right];
    }
    
    if (currentSum < target_sum) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return [-1, -1];
}

console.log(pair_with_targetsum([1, 2, 3, 4, 6], 6));
console.log(pair_with_targetsum([2, 5, 9, 11], 11));