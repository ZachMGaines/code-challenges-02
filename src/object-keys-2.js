export function getHouses(obj) {
  const houses = Object.values(obj).map(item => {
    return item.house;
  });
  return houses;
}

export function updateNumbers(obj) {
  const array = [];
  Object.keys(obj).forEach(booger => {
    array.push(`${booger}: ${obj[booger]}`);
  });
  return array;
}