function highestScoringWord(string) {
  const words = string.split(" ");
  const scores = words.map((word) => {
    Array.from(word).reduce(
      (score, letter) => score + letter.charCodeAt(0) - 96,
      0
    );
  });
  const highestScore = Math.max(...scores);
  const highestIndex = scores.indexOf(highestScore);
  return words[highestIndex];
}
// console.log("z".charCodeAt(0) - "a".charCodeAt(0) + 1);
console.log(highestScoringWord("man i need a tax up to ubud"));
module.exports = highestScoringWord;
