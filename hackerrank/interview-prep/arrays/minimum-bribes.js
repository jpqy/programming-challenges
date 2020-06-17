/**
 * Prints the minimum number of bribes necessary to form line `q`, or 
 * "Too chaotic" if the line configuration is not possible.
 * @param {Number[]} q An array representing the line of people, with the value
 *                     indicating their original position in line
 */
function minimumBribes(q) {
  let totalBribes = 0;
  let individualBribes = [];
  let i = 0;
  while (i < q.length) {
    if (i + 1 === q[i]) {
      i++;
    } else {
      // Find the position of the original person
      const positionOfOriginal = q.indexOf(i + 1, i);

      // Swap pairwise from the original person to i
      for (let j = positionOfOriginal; j > i; j--) {
        [q[j - 1], q[j]] = [q[j], q[j - 1]];
        const briber = q[j];
        if (individualBribes[briber]) {
          individualBribes[briber]++;
          if (individualBribes[briber] > 2) {
            return console.log("Too chaotic");
          }
        } else {
          individualBribes[briber] = 1;
        }
        totalBribes++;
      }
    }
  }
  console.log(totalBribes);
}

minimumBribes([2, 1, 4, 3]);
minimumBribes([1, 2, 3, 4, 5, 7, 8, 6]);
minimumBribes([1, 2, 3, 5, 7, 8, 6, 4]);
