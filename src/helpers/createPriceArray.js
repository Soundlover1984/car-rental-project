let priceArray = [];

const createPriceArray = () => {
  for (let i = 30; i <= 500; i += 10) {
    priceArray.push(i);
  }
  return priceArray;
};

createPriceArray();

export { priceArray };