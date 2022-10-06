// Check string length and return strings between 1 and 10
function stringLength(string) {
  let sLength = string.length
  if (sLength > 0 && sLength <= 10) {
    return sLength
  } else {
    throw new Error(
      'Your string should be at least 1 character long and not longer than 10 characters'
    )
  }
}

// reverse strings
const reverseString = (string) => {
  return string.split('').reverse().join('')
}

// Calculator
class calculator {
  add = (num1, num2) => {
    return num1 + num2
  }

  subtract = (num1, num2) => {
    return num1 - num2
  }

  divide = (num1, num2) => {
    return num1 / num2
  }

  multiply = (num1, num2) => {
    return num1 * num2
  }
}

function capitalize(string) {
  let result = []

  for (let i = 0; i < string.length; i += 1) {
    console.log(i)
    if (i === 0) {
      result[i] = string[i].toUpperCase()
    } else {
      result[i] = string[i]
    }
  }

  return result.join('')
}

module.exports = { stringLength, reverseString, calculator, capitalize }
