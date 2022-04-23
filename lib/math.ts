export function add(a: number, b: number): number {
  return a + b
}

export function subtract(a: number, b: number): number {
  return a - b
}

export function multiply(a: number, b: number, run: boolean): number {
  if (run) {
    return a * b
  } else {
    return 0
  }
}

export function divide(a: number, b: number): number {
  return a / b
}

export function min(numbers: number[]): number {
  return Math.min(...numbers)
}

export function max(numbers: number[]): number {
  return Math.max(...numbers)
}

export function fibonacci(n: number): number {
  const phi = (1 + Math.sqrt(5)) / 2
  const asymp = Math.pow(phi, n) / Math.sqrt(5)

  return Math.round(asymp)
}
