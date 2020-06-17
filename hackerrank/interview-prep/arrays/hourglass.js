/**
 * Finds the sum of all integers in an hourglass shape in a 6x6 2D array and 
 * returns the max.
 * @param {Number[]} arr A 2D 6x6 array containing integers
 */
function hourglassSum(arr) {
  let max = -Infinity;
  let sum;
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      sum =
        arr[r][c] +
        arr[r][c + 1] +
        arr[r][c + 2] +
        arr[r + 1][c + 1] +
        arr[r + 2][c] +
        arr[r + 2][c + 1] +
        arr[r + 2][c + 2];

      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}
