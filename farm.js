const corn = {
  name: "corn",
  yield: 30,
  factors: {
    sun: {
      low: -50,
      medium: 0,
      high: 50,
    },
    wind: {
      low: 100,
      medium: -30,
      high: -60,
    },
  },
};

const environmentFactors = {
  sun: "low",
};

const farm = {
  getCostsForCrop: (plant, price) => plant + price,
  getRevenueForCrop: (salesPrice, kiloPlants) => salesPrice * kiloPlants,
  getProfitForCrop: (getCostsForCrop, getRevenueForCrop) =>
    getCostsForCrop - getRevenueForCrop,
  getTotalProfit: (totalCost, totalRevenue) => totalCost - totalRevenue,
  getYieldForPlant: (corn) =>
    corn.factors
      ? (corn.yield * corn.factors.sun.low * corn.factors.wind.low) / 100 / 100
      : corn.yield,
  getYieldForCrop: (input) => input.crop.yield * input.numCrops,
  getTotalYield: ({ crops }) => {
    if (crops[0].numCrops == 0) return 0;
    return (
      crops[0].crop.yield * crops[0].numCrops +
      crops[1].crop.yield * crops[1].numCrops
    );
  },
};

module.exports = farm;
