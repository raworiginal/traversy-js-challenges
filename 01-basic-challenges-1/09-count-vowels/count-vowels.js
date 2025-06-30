function countVowels(string) {
  const vowels = "aeiou";
  let count = 0;
  for (let char of string.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
