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
  getRevenueForCrop: (salesPrice, kiloPlants, factor) => {
    if (salesPrice && kiloPlants && !factor) {
      return salesPrice * kiloPlants;
    } else {
      return salesPrice * kiloPlants * factor;
    }
  },
  getProfitForCrop: (getCostsForCrop, getRevenueForCrop, factor) => {
    if (getCostsForCrop && getRevenueForCrop && !factor) {
      return getCostsForCrop - getRevenueForCrop;
    } else {
      return (getCostsForCrop - getRevenueForCrop) * factor;
    }
  },
  getTotalProfit: (totalCost, totalRevenue, factor) => {
    if (totalCost && totalRevenue && !factor) {
      return totalCost - totalRevenue;
    } else {
      return (totalCost - totalRevenue) * factor;
    }
  },
  getYieldForPlant: (corn) =>
    corn.factors
      ? (corn.yield * corn.factors.sun.low * corn.factors.wind.low) / 100 / 100
      : corn.yield,
  getYieldForCrop: (input) => {
    if (input.crop.factors)
      return (
        (input.crop.yield * input.numCrops * input.crop.factors.sun.high) / 100
      );
    return input.crop.yield * input.numCrops;
  },
  getTotalYield: ({ crops }) => {
    if (crops[0].crop.factors) {
      crops[0].crop.yield * crops[0].numCrops * crops[0].crop.factors.wind.low +
        crops[1].crop.yield *
          crops[1].numCrops *
          crops[0].crop.factors.wind.low;
    }
    if (crops[0].numCrops == 0) return 0;
    else {
      return (
        crops[0].crop.yield * crops[0].numCrops +
        crops[1].crop.yield * crops[1].numCrops
      );
    }
  },
};

module.exports = farm;
