import { add, divide, max, min, multiply, subtract } from "../lib/math"

describe("Math.add", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toBe(3)
  })

  it("should subtract two numbers", () => {
    expect(subtract(3, 1)).toBe(2)
  })

  it("should multiply two numbers when run is true", () => {
    expect(multiply(4, 2, true)).toBe(8)
  })

  it("should not multiply two numbers when run is false", () => {
    expect(multiply(4, 2, false)).toBe(0)
  })

  it("should divide two numbers", () => {
    expect(divide(10, 2)).toBe(5)
  })

  it("should find the largest number in an array of numbers", () => {
    expect(max([2, 4, 6])).toBe(6)
  })

  it("should find the largest number in an array of numbers when they are negative", () => {
    expect(max([-1, -2, -3])).toBe(-1)
  })

  it("should find the smallest number in an array of numbers", () => {
    expect(min([2, 4, 6])).toBe(2)
  })

  it("should find the smallest number in an array of numbers when they are negative", () => {
    expect(min([-1, -2, -3])).toBe(-3)
  })
})
