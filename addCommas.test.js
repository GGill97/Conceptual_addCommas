const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it works for postive small integers", () => {
    expect(addCommas(6)).toBe("6");
    expect(addCommas(10)).toBe("10");
    expect(addCommas(555).toBe("555"));
  });

  test("it works for positive large integers", () => {
    expect(addCommas(1234)).toBe("1,234");
    expect(addCommas(1234567)).toBe("1,234,567");
    expect(addCommas("1234567891")).toBe("1,234,567,891");
  });

  test("it works with negative small integers", () => {
    expect(addCommas(-6)).toBe("-6");
    expect(addCommas(-10)).toBe("-10");
    expect(addCommas(-555)).toBe("-555");
  });

  test("it works for negative large integers", () => {
    expect(addCommas(-1234)).toBe("-1,234");
    expect(addCommas(-1234567)).toBe("-1,234,567");
    expect(addCommas(-1234567891)).toBe("-1,234,567,891");
  });

  test("it works with small positive decimals", () => {
    expect(addCommas(1.234)).toBe("1.234");
    expect(addCommas(2.9)).toBe("2.9");
    expect(addCommas(123.123123)).toBe("123.123123");
    expect(addCommas(0.12345)).toBe("0.12345");
  });

  test("it works for large positive decimals", () => {
    expect(addCommas(12345.678)).toBe("12,345,678");
    expect(addCommas(1234567.89).toBe("1,234,567.89"));
  });

  test(" it works with small negative decimals", () => {
    expect(addCommas(-1.234)).toBe("-1.234");
    expect(addCommas(-1.2)).toBe("-1.2");
    expect(addCommas(-123.45678)).toBe("-123.45678");
    expect(addCommas(-0.12345)).toBe("-0.12345");
  });

  test(" it works for large negative decimals", () => {
    expect(addCommas(-12345.678)).toBe("-12,345,678");
    expect(addCommas(-1234567.89)).toBe("-1,234,567.89");
  });
});
