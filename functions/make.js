module.exports = function make(...rest) {
  const arr = [];
  const args = rest;
  args.forEach(i => arr.push(i));
  function make2(...other) {
    const arg = other;
    if (typeof (arg[0]) === 'function') {
      return arr.reduce(arg[0]);
    }
    arg.forEach(i => arr.push(i));
    return make2;
  }
  return make2();
};
