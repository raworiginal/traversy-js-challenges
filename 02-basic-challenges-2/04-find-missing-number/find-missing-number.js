function findMissingNumber(nums) {
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) return i;
  }
}

module.exports = findMissingNumber;
