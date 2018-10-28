module.exports = function sumOfOther(arr) {
  const newArr = [];
  arr.forEach((x, y, z) => newArr.push(z.reduce((sum, i, ind) => ind === y ? sum += 0 : sum += i, 0)));
  return newArr;
};
