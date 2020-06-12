/**
 * Given an array of sock colours, find how many complete pairs exist
 * @param {*} n
 * @param {*} ar The array of sock colours
 */
function sockMerchant(n, ar) {
  // Generate frequencies table of sock colours
  const frequency = {};
  for (const element of ar) {
    if (frequency[element]) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
  }

  // Do integer division by 2 on frequency values
  let pairs = 0;
  for (const sock in frequency) {
    pairs += Math.floor(frequency[sock] / 2);
  }
  return pairs;
}

console.log(sockMerchant(1, [1, 1, 1, 2, 2, 3, 4]));
