import { returnTen, findMax } from './munge-array.js';

test('it should return the last 10 characters of a string as an array', () => {
  expect(returnTen('hello world')).toStrictEqual(['e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']);
  expect(returnTen('world')).toStrictEqual(['w', 'o', 'r', 'l', 'd']);
});

test('it should take in a matrix of positive numbers and return the number with the highest value', () => {
  expect(findMax([[13, 24, 24, 2], [2, 5, 6], [2, 3]])).toStrictEqual(24);
});