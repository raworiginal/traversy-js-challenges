function sumOfEvenSquares(numbers) {
  const evens = numbers.filter((num) => num % 2 === 0);
  const evenSqrs = evens.map((even) => even ** 2);
  const sum = evenSqrs.reduce((sum, num) => sum + num, 0);
  return sum;
}

module.exports = sumOfEvenSquares;
