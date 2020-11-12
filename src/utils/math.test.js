import { add, subtract } from "./math";

describe("add", () => {
  it("should return 3 when passed 1 and 2", () => {
    const result = add(1, 2);
    expect(result).toEqual(3);
  });
});

describe("subtract", () => {
  it("should return 3 when passed 4 and 1", () => {
    const result = subtract(4, 1);
    expect(result).toEqual(3);
  });
});
