export const toLastNames = people => {
  return people.map(person => person.firstName + ' ' + person.lastName);
};

export const addValues = arr => {
  return arr.reduce((total, value) => total += value, 0);
};

export const addPurchase = arr => {
  return arr.reduce((sum, value) => {
    sum += value.purchasePrice;
    return sum;
  });
};

export const countNumberOfElements = arr => {
  return arr.reduce((accumulator) => {
    return accumulator + 1;
  }, 0);
};