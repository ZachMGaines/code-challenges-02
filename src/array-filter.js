export function evensOnly(arr) {
  return arr.filter(item => {
    return item % 2 === 0;
  });
}

export function fiveOrFewer(arr) {
  return arr.filter(item => item.length <= 5);
};

