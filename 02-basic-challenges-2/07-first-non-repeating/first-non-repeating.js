function findFirstNonRepeatingCharacter(string) {
  const counts = new Map();
  for (let char of string) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }
  for (let [char, count] of counts) {
    if (count === 1) {
      return char;
    }
  }
  return null;
}
console.log(findFirstNonRepeatingCharacter("aabccdeff")); // should return 'b'
console.log(findFirstNonRepeatingCharacter("aabbcc")); // should return null
console.log(findFirstNonRepeatingCharacter("abcdef")); // should return 'a'
module.exports = findFirstNonRepeatingCharacter;
