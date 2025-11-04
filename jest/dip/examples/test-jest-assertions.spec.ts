describe("Primitive values", () => {
  it("should test jest assertions", () => {
    const number: number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeFalsy();
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
  });
});

describe("Object values", () => {
  it("should test jest assertions with objects", () => {
    const person = {
      name: "Yago",
      age: 25,
    };

    expect(person).toEqual({
      name: "Yago",
      age: 25,
    });

    expect(person).toHaveProperty("name");
    expect(person).toHaveProperty("age", 25);
  });
});
