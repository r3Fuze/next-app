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
