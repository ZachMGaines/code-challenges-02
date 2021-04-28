import { evensOnly } from './array-filter.js';

test('should only return evens', () => {
  const input = [3, 6, 8, 2];
  const actual = evensOnly(input);
  expect(actual).toEqual([6, 8, 2]);
});