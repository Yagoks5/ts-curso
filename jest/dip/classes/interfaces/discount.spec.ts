import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from "./discount";

describe("Discount", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should calculate price with fifty percent discount", () => {
    const discount = new FiftyPercentDiscount();
    const calculateSpy = jest.spyOn(discount, "calculate");
    const discountedPrice = discount.calculate(200);
    expect(discountedPrice).toBe(100);
    expect(calculateSpy).toHaveBeenCalledTimes(1);
  });

  it("should calculate price with ten percent discount", () => {
    const discount = new TenPercentDiscount();
    const calculateSpy = jest.spyOn(discount, "calculate");
    const discountedPrice = discount.calculate(100);
    expect(discountedPrice).toBe(90);
    expect(calculateSpy).toHaveBeenCalledTimes(1);
  });

  it("should calculate price with no discount", () => {
    const discount = new NoDiscount();
    const calculateSpy = jest.spyOn(discount, "calculate");
    const discountedPrice = discount.calculate(50);
    expect(discountedPrice).toBe(50);
    expect(calculateSpy).toHaveBeenCalledTimes(1);
  });
});
