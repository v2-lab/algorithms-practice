/**
 * Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.
 */

const make_squares = (arr) => {
  const n = arr.length;
  let squares = [];
  let hightestSquares = n - 1;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    let leftSquares = arr[left] * arr[left];
    let rightSquares = arr[right] * arr[right];
    if (leftSquares > rightSquares) {
      squares[hightestSquares] = leftSquares;
      left += 1;
    } else {
      squares[hightestSquares] = rightSquares;
      right -= 1;
    }
    hightestSquares -= 1;
  }
  return squares;
}

console.log(make_squares([-2, -1, 0, 2, 3]));
console.log(make_squares([-3, -1, 0, 1, 2]));