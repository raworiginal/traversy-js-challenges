function countOccurrences(str, char) {
  let count = 0;
  for (let letter of str) {
    if (letter === char) {
      count++;
    }
  }
  return count;
}

module.exports = countOccurrences;
