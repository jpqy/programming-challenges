/**
 * Given 2 arrays, return the lowest sum of the differences of paired elements
 * ex: [1, 3, 4, 5, 6]
 *     [1, 3, 8, 9, 15] =>
 *                      1:1=0, 3:3=0, 4:15=11, 5:9=4, 6:8=2
 *                      sum = 11 + 4 + 2 = 17
 * @param {*} employee_id The first array
 * @param {*} job_id      The second array
 */
function getMinCost(employee_id, job_id) {
  // Tag each array element with a letter
  const crews = employee_id.map(employee_id => [employee_id, "c"]);
  const jobs = job_id.map(job_id => [job_id, "j"]);
  // Combine the two arrays and sort by number
  const combined = [...crews, ...jobs].sort((a, b) => a[0] - b[0]);

  let total = 0;

  // Keep finding the pair with the lowest difference and remove them.  
  while (combined.length !== 0) {
    let lowest = Infinity;
    let lowestIndex = 0;

    // Pairwise comparisons between adjacent elements
    for (let i = 0; i < combined.length - 1; i++) {
      let currentPair = [combined[i], combined[i + 1]];

      // Find difference if elements are from different arrays
      if (currentPair[0][1] !== currentPair[1][1]) {
        let difference = Math.abs(currentPair[0][0] - currentPair[1][0]);        
        if (difference < lowest) {
          lowest = difference;
          lowestIndex = i;
          if (difference === 0) {
            break;
          }
        }
      }
    }
    total += lowest;
    combined.splice(lowestIndex, 2);
  }
  return total;
}

console.log(getMinCost([1, 3, 4, 5, 6], [1, 3, 8, 9, 15]));
