module.exports = function recursion(node) {
  const arr = [];
  const newArr = [];  
  function passTheTree(node) {
    if (node == null) return;
    passTheTree(node.left);
    arr.push(node.value);
    passTheTree(node.right);
  }

  passTheTree(node);

  function makeArr2(arr, n) {
    const x = Math.floor(arr.length / 2);
    if (!newArr[n]) newArr[n] = [];
    newArr[n].push(arr[x]);
    if (arr.length === 1) {
      return;
    }
    const arr1 = arr.slice(0, x);
    const arr2 = arr.slice(x + 1, arr.length);
    makeArr2(arr1, ++n);
    makeArr2(arr2, n);
  }
  makeArr2(arr, 0, 0);
  return newArr;
}
