/**
 * Given a string representing a hiking path with "U" for up and "D" for down,
 * count how many valleys are on the hike. A valley starts with a step below
 * starting elevation and ends with a step back to starting elevation.
 * @param {*} n
 * @param {*} s - A string representing the path: U=up, D=down
 */
function countingValleys(n, s) {
  let valleys = 0;

  s.split("").reduce((lastElevation, delta) => {
    let currentElevation;
    if (delta === "U") {
      currentElevation = lastElevation + 1;
    } else {
      currentElevation = lastElevation - 1;
    }

    // Check if we just stepped up to sea level, means a valley just ended
    if (currentElevation === 0 && delta === "U") {
      valleys++;
    }
    return currentElevation;
  }, 0);

  return valleys;
}

console.log(countingValleys(12, "DDUUDDUDUUUD"));
