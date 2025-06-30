function findMissingLetter(arrayOfChars) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(alphabet.length);
  if (!arrayOfChars) return "";
  let offset = alphabet.indexOf(arrayOfChars[0]);
  console.log(`The Offset is ${offset}`);
  for (let char of arrayOfChars) {
    if (alphabet.indexOf(char) - offset > arrayOfChars.indexOf(char)) {
      missingLetterIdx = arrayOfChars.indexOf(char) + offset;
      console.log(`MissingLetterIdx = ${missingLetterIdx}`);
      return alphabet[missingLetterIdx];
    }
  }
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"])); // => "e"
console.log(findMissingLetter(["O", "Q", "R", "S"])); // )=> "P"
console.log(findMissingLetter(["t", "u", "v", "w", "x", "z"])); // => "y"
module.exports = findMissingLetter;
