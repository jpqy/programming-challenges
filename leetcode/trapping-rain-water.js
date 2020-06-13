/**
 * Given an array of non-negative integers representing an elevation map
 * where the width of each bar is 1, compute how much water it is able to
 * trap after raining.
 * @param {number[]} heights
 * @return {number}
 */
const trap = function (heights) {
  let totalWater = 0;
  let currentWater = 0;
  let startHeight = 0;

  // Keep track of the start of a container. As height decreases, add to
  // currentWater. When height reaches starting height, container is complete
  // so add currentWater to totalWater.
  for (height of heights) {
    if (height >= startHeight) {
      totalWater += currentWater;
      startHeight = height;
      currentWater = 0;
    } else {
      currentWater += startHeight - height;
    }
  }

  // Handle when startHeight is not reached by end of array by repeating algo
  // backwards to the unreached startHeight
  if (currentWater) {
    reverseHeights = heights.reverse();
    totalWater += trap(
      reverseHeights.slice(0, reverseHeights.indexOf(startHeight) + 1)
    );
  }
  return totalWater;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 3]));
