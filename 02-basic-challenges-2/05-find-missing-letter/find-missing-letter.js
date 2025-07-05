function findMissingLetter(arrayOfChars) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (!arrayOfChars) return "";
  let offset = alphabet.indexOf(arrayOfChars[0]);
  for (let char of arrayOfChars) {
    if (alphabet.indexOf(char) - offset > arrayOfChars.indexOf(char)) {
      missingLetterIdx = arrayOfChars.indexOf(char) + offset;
      return alphabet[missingLetterIdx];
    }
  }
}

module.exports = findMissingLetter;
