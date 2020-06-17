/**
 * Performs a left-rotation on an array.
 * Ex. [1,2,3,4] rotated once would be [2,3,4,1]
 * @param {*} a The array to be rotated
 * @param {*} d The number of left rotations
 */
function rotLeft(a, d) {
  const result = [];
  const size = a.length;
  const actualRotations = d % size;

  for (let i = 0; i < size; i++) {
    result[(size + i - actualRotations) % size] = a[i];
  }
  return result;
}
