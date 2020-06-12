/**
 * Given an array of sock colours, find how many complete pairs exist
 * @param {*} n
 * @param {*} ar The array of sock colours
 */
function sockMerchant(n, ar) {
  let pairs = 0;

  // Keep track of unpaired socks, use it for increment logic
  const unpaired = {};
  for (const sock of ar) {
    if (unpaired[sock]) {
      pairs++;
      unpaired[sock] = false;
    } else {
      unpaired[sock] = true;
    }
  }
  return pairs;
}

console.log(sockMerchant(1, [1, 1, 1, 2, 2, 2, 2, 3, 4]));
