/* eslint-disable */
const assert = require('assert');
const sumOfOther = require('../functions/sumOfOther.js');
const make = require('../functions/make.js');
const recursion = require('../functions/recursion.js');


const sum = ((a, b) => a + b);
const multiply = ((a, b) => a * b);
const subtraction = ((a, b) => a - b);

const tree1 = { value: 100, left: { value: 90, left: { value: 70 }, right: { value: 99 } }, right: { value: 120, left: { value: 110 }, right: { value: 130 } } };
const tree2 = { value: 8, left: { value: 4, left: { value: 2, left: { value: 1 }, right: { value: 3 } }, right: { value: 6, left: { value: 5 }, right: { value: 7 } } }, right: { value: 12, left: { value: 10, left: { value: 9 }, right: { value: 11 } }, right: { value: 14, left: { value: 13 }, right: { value: 15 } } } };
const tree3 = { value: 16, left: { value: 8, left: { value: 4, left: { value: 2, left: { value: 1 }, right: { value: 3 } }, right: { value: 6, left: { value: 5 }, right: { value: 7 } } }, right: { value: 12, left: { value: 10, left: { value: 9 }, right: { value: 11 } }, right: { value: 14, left: { value: 13 }, right: { value: 15 } } } }, right: { value: 24, left: { value: 20, left: { value: 18, left: { value: 17 }, right: { value: 19 } }, right: { value: 22, left: { value: 21 }, right: { value: 23 } } }, right: { value: 28, left: { value: 26, left: { value: 25 }, right: { value: 27 } }, right: { value: 30, left: { value: 29 }, right: { value: 31 } } } } };
describe('functions in "./functions"', () => {
  describe('sumOfOther - should return new array, with i equal to the sum of another elemets', () => {
    it('1 should return correct array', () => {
      const arr = [2, 3, 4, 1];
      assert.deepEqual(sumOfOther(arr), [8, 7, 6, 9]);
    });
    it('2 should return correct array', () => {
      const arr = [1, 2, 3, 4];
      assert.deepEqual(sumOfOther(arr), [9, 8, 7, 6]);
    });
    it('3 should return correct array', () => {
      const arr = [9, 8, 7, 6];
      assert.deepEqual(sumOfOther(arr), [21, 22, 23, 24]);
    });
    it('4 should return correct array', () => {
      const arr = [100, 100, 100, 100, 100];
      assert.deepEqual(sumOfOther(arr), [400, 400, 400, 400, 400]);
    });
    it('5 should return correct array', () => {
      const arr = [0, 0, 0, 0, 0, 0];
      assert.deepEqual(sumOfOther(arr), [0, 0, 0, 0, 0, 0]);
    });
    it('6 should return correct array', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      assert.deepEqual(sumOfOther(arr), [54, 53, 52, 51, 50, 49, 48, 47, 46, 45]);
    });
    it('7 should return correct array', () => {
      const arr = [1, 1, 1, 0];
      assert.deepEqual(sumOfOther(arr), [2, 2, 2, 3]);
    });
  });

  describe('make - should memorize values while the argument is not a function', () => {
    it('1 should return correct number', () => {
      const num = make(24)(3)(10)(sum);
      assert.equal(num, 37);
    });
    it('2 should return correct number', () => {
      const num = make(15)(34, 21, 666)(41)(sum);
      assert.equal(num, 777);
    });
    it('3 should return correct number', () => {
      const num = make(15, 20, 10, 10)(34, 21, 666)(41, 10)(sum);
      assert.equal(num, 827);
    });
    it('4 should return correct number', () => {
      const num = make(15, 20, 10, 10)(34, 21, 666)(41, 10)(multiply);
      assert.equal(num, 5848945200000);
    });
    it('5 should return correct number', () => {
      const num = make(10, 10, 10, 10)(10, 10, 10)(10)(multiply);
      assert.equal(num, 100000000);
    });
    it('6 should return correct number', () => {
      const num = make(0, 10, 100, 10)(34, 21, 106)(41, 10)(multiply);
      assert.equal(num, 0);
    });
    it('7 should return correct number', () => {
      const num = make(10, -10, 100, -100)(-34, 34, 106)(-106, 0)(sum);
      assert.equal(num, 0);
    });
    it('8 should return correct number', () => {
      const num = make(10, -10, 100, -100)(-34, 34, 106)(-106, 0)(subtraction);
      assert.equal(num, 20);
    });
  });
  describe('recursion - should make an array from binary tree', () => {
    it('1 should return correct array', () => {
      const array = recursion(tree1);
      assert.deepEqual(array, [[100], [90, 120], [70, 99, 110, 130]]);
    });
    it('2 should return correct array', () => {
      const array = recursion(tree2);
      assert.deepEqual(array, [[8], [4, 12], [2, 6, 10, 14], [1, 3, 5, 7, 9, 11, 13, 15]]);
    });
    it('3 should return correct array', () => {
      const array = recursion(tree3);
      assert.deepEqual(array, [[16], [8, 24], [4, 12, 20, 28], [2, 6, 10, 14, 18, 22, 26, 30], [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]]);
    });
  });
});
