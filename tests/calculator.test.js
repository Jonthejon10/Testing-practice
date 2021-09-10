const calculator = require('../code/calculator')

test('adds numbers', () => {
    expect(calculator.add(2, 2, 2)).toBe(6)
})

test('adds more than 2numbers', () => {
    expect(calculator.add(2, 2, 2)).toBe(6)
})


test('converts numbers typed as strings to numbers', () => {
    expect(calculator.add('1', 2)).toBe(3)
})

test('subtracts numbers', () => {
    expect(calculator.subtract(7, 5, 1)).toBe(1)
})

test('multiplies numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6)
})

test('multiplies with 0', () => {
    expect(calculator.multiply(2, 0)).toBe(0)
})

test('divides numbers', () => {
    expect (calculator.divide(10, 5)).toBe(2)
})

test('divides more than 2', () => {
    expect(calculator.divide(12, 2, 3)).toBe(2)
})
