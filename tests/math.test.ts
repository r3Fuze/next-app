import { add, multiply, subtract } from "../lib/math"

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
})
