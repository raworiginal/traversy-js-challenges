function areAllCharactersUnique(string) {
  let setString = new Set(string.split(""));
  return Array.from(setString).join("") === string;
}
console.log(
  areAllCharactersUnique("abcdefg"), // true
  areAllCharactersUnique("abcdefgA"), // true
  areAllCharactersUnique("programming"), // false
  areAllCharactersUnique(""), // true
  areAllCharactersUnique("a") // true
);
module.exports = areAllCharactersUnique;
