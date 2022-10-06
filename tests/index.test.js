const {
  stringLength,
  reverseString,
  calculator,
  capitalize,
} = require('../index')
let calc = new calculator()

// check string length
test('Check string length to be between 1 and 10', () => {
  expect(stringLength('Hello')).toBe(5)
})

// Test reverse string
test('Check if string is reversed', () => {
  expect(reverseString('Yello')).toMatch('olleY')
})

// check if string length is less than 10 if not throw an error
test('string length to be less than 10', () => {
  expect(() => stringLength('tekejgfjffffgfg')).toThrow()
})

//Test calculator
describe('calculator checks', () => {
  test('Checks add()', () => {
    expect(calc.add(5, 5)).toBe(10)
  })
  test('Checks subtract()', () => {
    expect(calc.subtract(5, 5)).toBe(0)
  })
  test('Checks divide()', () => {
    expect(calc.divide(5, 5)).toBe(1)
  })
  test('Checks multiply()', () => {
    expect(calc.multiply(5, 5)).toBe(25)
  })

  //Test capitalise

  test('Checks whether capitalize() works', () => {
    expect(capitalize('horses')).toMatch('Horses')
  })
})
