import {
  add,
  divide,
  fibonacci,
  isBetween,
  max,
  min,
  multiply,
  subtract,
} from "@/lib/math"

describe("math", () => {
  describe(".add", () => {
    it("should add two numbers", () => {
      expect(add(1, 2)).toBe(3)
    })
  })

  describe(".subtract", () => {
    it("should subtract two numbers", () => {
      expect(subtract(3, 1)).toBe(2)
    })
  })

  describe(".multiply", () => {
    it("should multiply two numbers when run is true", () => {
      expect(multiply(4, 2, true)).toBe(8)
    })

    it("should not multiply two numbers when run is false", () => {
      expect(multiply(4, 2, false)).toBe(0)
    })
  })

  describe(".divide", () => {
    it("should divide two numbers", () => {
      expect(divide(10, 2)).toBe(5)
    })
  })

  describe(".max", () => {
    it("should find the largest number in an array of numbers", () => {
      expect(max([2, 4, 6])).toBe(6)
    })

    it("should find the largest number in an array of numbers when they are negative", () => {
      expect(max([-1, -2, -3])).toBe(-1)
    })
  })

  describe(".min", () => {
    it("should find the smallest number in an array of numbers", () => {
      expect(min([2, 4, 6])).toBe(2)
    })

    it("should find the smallest number in an array of numbers when they are negative", () => {
      expect(min([-1, -2, -3])).toBe(-3)
    })
  })

  describe(".fibonacci", () => {
    it("should calculate the sequence to 3 digits", () => {
      expect(fibonacci(3)).toBe(2)
    })

    it("should calculate the sequence to 50 digits", () => {
      expect(fibonacci(50)).toBe(12586269025)
    })

    it("should return 0 if n is 0", () => {
      expect(fibonacci(0)).toBe(0)
    })

    it("should return 0 if n is -1", () => {
      expect(fibonacci(-1)).toBe(0)
    })

    it("should return NaN if n is NaN", () => {
      expect(fibonacci(NaN)).toBeNaN()
    })
  })

  describe(".isBetween", () => {
    it("should throw an error if start is greater than end", () => {
      expect(() => {
        isBetween(2, 3, 1)
      }).toThrow("Start number cannot be greater than end number")
    })

    it("should return true when the number is between the start and end", () => {
      expect(isBetween(2, 1, 3)).toBe(true)
    })

    it("should return false when the number is not between the start and end", () => {
      expect(isBetween(4, 1, 3)).toBe(false)
    })

    it("should throw an error if any input is NaN", () => {
      const errorMessage = "Inputs cannot be NaN"

      expect(() => {
        isBetween(NaN, 1, 3)
      }).toThrow(errorMessage)

      expect(() => {
        isBetween(2, NaN, 3)
      }).toThrow(errorMessage)

      expect(() => {
        isBetween(2, 1, NaN)
      }).toThrow(errorMessage)
    })
  })
})
