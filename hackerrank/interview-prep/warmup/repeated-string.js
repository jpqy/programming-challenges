// Returns the number of "a"s in a substring `s` that is repeated `n` times
function repeatedString(s, n) {
  const fullRepeats = Math.floor(n / s.length);
  const remainderIndex = n % s.length;

  const letters = s.split("");
  return (
    letters.filter(letter => letter === "a").length * fullRepeats +
    letters.slice(0, remainderIndex).filter(letter => letter === "a").length
  );
}
