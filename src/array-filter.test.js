import { evensOnly, fiveOrFewer } from './array-filter.js';

test('should only return evens', () => {
  const input = [3, 6, 8, 2];
  const actual = evensOnly(input);
  expect(actual).toEqual([6, 8, 2]);
});

test('should return strings with 5 or fewer characters', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping'];
  const actual = fiveOrFewer(input);
  expect(actual).toEqual(['dog', 'wolf', 'by', 'eaten']);
});

