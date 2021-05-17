export function returnTen(str) {
  return str.split('').slice(-10);
}

export function findMax(matrix) {
  const maxOfEachArray = matrix.map(arr => Math.max.apply(null, arr));
  return Math.max.apply(null, maxOfEachArray);
}