let priceArray = [];

const createPriceArray = () => {
  for (let i = 30; i <= 500; i += 10) {
    priceArray.push(i);
  }
  //   console.log(priceArray);
  return priceArray;
};

createPriceArray();

export { priceArray };