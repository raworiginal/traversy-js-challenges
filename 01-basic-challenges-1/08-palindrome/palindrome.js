const reverseString = require("../07-reverse-string/reverse-string");

function isPalindrome(string) {
  formattedStr = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = formattedStr.split("").reverse().join("");
  return formattedStr === reversed;
}

module.exports = isPalindrome;
