module.exports = function make() {
  const arr = [];
  const args = [].slice.call(arguments);
  args.forEach(i => arr.push(i));
  function make2() {
    const arg = [].slice.call(arguments);
    if (typeof (arg[0]) === 'function') {
      return arr.reduce(arg[0]);
    }
    arg.forEach(i => arr.push(i));
    return make2;
  }
  return make2();
};
