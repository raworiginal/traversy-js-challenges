function arrayIntersection(arr1, arr2) {
  intersect = [];
  arr1.forEach((element) => {
    if (arr2.includes(element)) {
      intersect.push(element);
    }
  });
  return intersect;
}

module.exports = arrayIntersection;
