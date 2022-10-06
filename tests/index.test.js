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
describe('addition calculator checks', () => {
  test('Checks addition of two positive numbers', () => {
    expect(calc.add(5, 5)).toBe(10)
  })
  test('Checks addition of positive and negative numbers', () => {
    expect(calc.add(3, -5)).toBe(-2)
  })
  test('checks addition of two negative numbers', () => {
    expect(calc.add(-3, -4)).toBe(-7)
  })

  describe('subtraction calculator checks', () => {
    test('Subtraction checks of two positive numbers()', () => {
      expect(calc.subtract(6, 5)).toBe(1)
    })
    test('Subtraction checks of a positive and negative number()', () => {
      expect(calc.subtract(6, -5)).toBe(11)
    })
    test('Subtraction checks of a positive and negative number()', () => {
      expect(calc.subtract(-3, -5)).toBe(2)
    })
  })

  describe('Division calculator checks', () => {
    test('Checks division of two equal positive numbers()', () => {
      expect(calc.divide(5, 5)).toBe(1)
    })
    test('Checks division of an odd and even number()', () => {
      expect(calc.divide(6, 5)).toBe(1.2)
    })
    test('Checks division of positive and negative numbers()', () => {
      expect(calc.divide(6, -2)).toBe(-3)
    })
    test('Checks division of negative and positive numbers()', () => {
      expect(calc.divide(-6, 2)).toBe(-3)
    })
    test('Checks division of two negative numbers()', () => {
      expect(calc.divide(-6, -2)).toBe(3)
    })
  })

  describe('Multiplication calculator checks', () => {
    test('Checks multiplication of two positive numbers()', () => {
      expect(calc.multiply(5, 5)).toBe(25)
    })
     test('Checks multiplication of a positive and negative number()', () => {
       expect(calc.multiply(7, -5)).toBe(-35)
     })
     test('Checks multiplication of two negative numbers()', () => {
       expect(calc.multiply(-7, -5)).toBe(35)
     })
  })

  

  //Test capitalize

  test('Checks whether capitalize() works', () => {
    expect(capitalize('horses')).toMatch('Horses')
  })
})
