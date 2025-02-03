import { add } from "./stringCalculator";

describe("String Calculator", () => {
  //test for empty string
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  //test single number case:
  test("returns the number itself when only one number is given", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  //test two numbers case:
  test("returns the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
    expect(add("3,4")).toBe(7);
  });

  //test multiple numbers case:
  test("returns the sum of multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("4,5,6,7")).toBe(22);
  });

  //test for support new line delimeters
  test("handles new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("4\n5\n6")).toBe(15);
  });

  //test for support custom delimeters
  test("supports custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n2|3|8")).toBe(13);
  });

  //test for negative numbers
  test("throws an error for negative numbers", () => {
    expect(() => add("-1,2,-3")).toThrow(
      "Negative numbers not allowed : -1,-3"
    );
  });
});