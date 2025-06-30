function findMaxNumber(nums) {
  let maxNumber = -Infinity;
  for (let num of nums) {
    if (num > maxNumber) maxNumber = num;
  }
  return maxNumber;
}

module.exports = findMaxNumber;
