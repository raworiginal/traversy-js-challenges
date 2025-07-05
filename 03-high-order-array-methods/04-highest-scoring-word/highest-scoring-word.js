function highestScoringWord(string) {
  let words = string.split(" ");
  let scores = words.map((word) => {
    let score = 0;
    for (char of word) {
      score += char.charCodeAt(0) - "a".charCodeAt(0) + 1;
    }
    return score;
  });
  return scores.reduce((index, score) => {});
}
console.log("z".charCodeAt(0) - "a".charCodeAt(0) + 1);
module.exports = highestScoringWord;
