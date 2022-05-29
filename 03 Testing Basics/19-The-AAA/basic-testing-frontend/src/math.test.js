import { it, expect } from "vitest";
import { add } from "./math.js";

it("should summarize all number values in an array", () => {
  //Arrange
  const numbers = [1, 2];

  //Act
  const result = add(numbers);

  //Assert
  const expectedValue = numbers.reduce(
    (prevValue, curValuem) => prevValue + curValuem,
    0
  );
  expect(result).toBe(expectedValue);
});
