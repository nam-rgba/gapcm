import { describe, it, expect } from "vitest";
import { fmt } from "./fmt";

describe("fmt Utility Class", () => {
  describe("vnd()", () => {
    it("should format valid positive numbers correctly to VND", () => {
      expect(fmt.vnd(100000)).toMatch(/100\.000\s?₫/);
      expect(fmt.vnd(5000)).toMatch(/5\.000\s?₫/);
    });

    it("should handle string inputs containing valid numbers", () => {
      expect(fmt.vnd("250000")).toMatch(/250\.000\s?₫/);
    });

    it("should handle zero and negative numbers", () => {
      expect(fmt.vnd(0)).toMatch(/0\s?₫/);
      expect(fmt.vnd(-50000)).toMatch(/-50\.000\s?₫/);
    });

    it("should rounded floating-point numbers to 0 decimal places", () => {
      expect(fmt.vnd(10000.89)).toMatch(/10\.001\s?₫/);
    });

    it("should fallback to 0 ₫ for invalid or missing inputs", () => {
      expect(fmt.vnd(undefined)).toMatch(/0\s?₫/);
      expect(fmt.vnd(NaN)).toMatch(/0\s?₫/);
      expect(fmt.vnd("invalid_string")).toMatch(/0\s?₫/);
      // @ts-ignore
      expect(fmt.vnd(null)).toMatch(/0\s?₫/);
    });
  });

  describe("dlr()", () => {
    it("should format valid numbers to USD with 2 fraction digits", () => {
      expect(fmt.dlr(1234.5)).toBe("$1,234.50");
      expect(fmt.dlr(99)).toBe("$99.00");
    });

    it("should handle negative numbers and decimal rounding", () => {
      expect(fmt.dlr(-12.3456)).toBe("-$12.35");
    });

    it("should fallback to $0.00 for invalid or missing inputs", () => {
      expect(fmt.dlr(undefined)).toBe("$0.00");
      expect(fmt.dlr("abc")).toBe("$0.00");
    });
  });
});
