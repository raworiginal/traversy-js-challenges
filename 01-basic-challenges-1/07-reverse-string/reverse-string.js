function reverseString(string) {
  let reversedString = "";
  for (let char of string) {
    reversedString = char + reversedString;
  }
  return reversedString;
}

module.exports = reverseString;
