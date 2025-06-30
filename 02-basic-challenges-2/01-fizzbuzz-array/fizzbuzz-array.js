function fizzBuzzArray(num) {
  const fBArray = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fBArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      fBArray.push("Fizz");
    } else if (i % 5 === 0) {
      fBArray.push("Buzz");
    } else {
      fBArray.push(i);
    }
  }
  return fBArray;
}

module.exports = fizzBuzzArray;
