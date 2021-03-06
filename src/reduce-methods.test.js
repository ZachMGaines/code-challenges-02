import { toLastNames, addValues, addPurchase, countNumberOfElements } from './reduce-methods.js';

test("creates a new list of each person's full name", () => {
  const input = [{ firstName: 'Jane', lastName: 'Doe' }, { firstName: 'James', lastName: 'Bond' }];
  const output = ['Jane Doe', 'James Bond'];
  expect(toLastNames(input)).toStrictEqual(output);
});

test('uses reduce to add the values in the array', () => {
  const input = [1, 2, 3, 4, 5];
  const output = 15;
  expect(addValues(input)).toStrictEqual(output);
});

test('counts the number of elements in the array', () => {
  const input = [
    {
      item: 'switch',
      purchasePrice: 299
    },
    {
      item: 'xbox one',
      purchasePrice: 399
    },
    {
      item: 'play station 5',
      purchasePrice: 499
    }
  ];
  const output = 1197;
  expect(addPurchase(input)).toStrictEqual(output);
});

test('uses reduce to count the number of elements in the array', () => {
  const input = [2, 4, 6, 8, 10];
  const output = 5;
  expect(countNumberOfElements(input)).toStrictEqual(output);
});