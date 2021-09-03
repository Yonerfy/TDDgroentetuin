const farm = require("./farm");

describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30,
  };

  test("Get yield for plant with no environment factors", () => {
    expect(farm.getYieldForPlant(corn)).toBe(30);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(farm.getYieldForCrop(input)).toBe(30);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(farm.getTotalYield({ crops })).toBe(23);
  });

  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(farm.getTotalYield({ crops })).toBe(0);
  });
});

test("Get the cost for a crop", () => {
  expect(farm.getCostsForCrop(2, 2)).toBe(4);
});

test("Get the revenue for a crop", () => {
  expect(farm.getRevenueForCrop(2, 2)).toBe(4);
});

test("Get the profit for the crop", () => {
  expect(farm.getProfitForCrop(10, 5)).toBe(5);
});

test("Get the total profit", () => {
  expect(farm.getTotalProfit(20, 10)).toBe(10);
});

describe("getYieldForPlant", () => {
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

  test("Get yield for plant with environment factors low sun and low wind", () => {
    expect(farm.getYieldForPlant(corn)).toBe(-15);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, with environment factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
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
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(farm.getYieldForCrop(input)).toBe(3);
  });
});
