export function evensOnly(arr) {
  return arr.filter(item => {
    return item % 2 === 0;
  });
}

