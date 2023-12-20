const nullMessage = 'Nothing or a message about canceling'
const errorMessage = 'Error message'
const notPrime = 'number is not prime'
const prime = 'number is prime'
const isNot3inN = 'number is not 3^n'
const is3inN = 'number is 3^n'
const sumIs = 'sum is '
const xInNIs = 'x^n is '

const valuesToCheckMap = {
  primeNum: [{
    value: null,
    expectedResult: nullMessage
  },
  {
    value: '',
    expectedResult: errorMessage
  },
  {
    value: '        ',
    expectedResult: errorMessage
  },
  {
    value: '    0     ',
    expectedResult: notPrime
  },
  {
    value: '-11',
    expectedResult: notPrime
  },
  {
    value: '-7.123',
    expectedResult: notPrime
  },
  {
    value: '    1   ',
    expectedResult: notPrime
  },
  {
    value: '7.123',
    expectedResult: notPrime
  },
  {
    value: '  7fd74gs63jn      ',
    expectedResult: errorMessage
  },
  {
    value: ' 2   ',
    expectedResult: prime
  },
  {
    value: ' 011 ',
    expectedResult: prime
  },
  {
    value: '  100',
    expectedResult: notPrime
  },
  {
    value: ' 121 ',
    expectedResult: notPrime
  },
  {
    value: ' 0187 ',
    expectedResult: notPrime
  },
  {
    value: ' 7 ',
    expectedResult: prime
  }],
  degreeOf3: [{
    value: null,
    expectedResult: nullMessage
  },
  {
    value: '',
    expectedResult: errorMessage
  },
  {
    value: '        ',
    expectedResult: errorMessage
  },
  {
    value: '  9fd74gs63jn      ',
    expectedResult: errorMessage
  },
  {
    value: '    0     ',
    expectedResult: isNot3inN
  },
  {
    value: '-27',
    expectedResult: isNot3inN
  },
  {
    value: '-9.123',
    expectedResult: isNot3inN
  },
  {
    value: '    1   ',
    expectedResult: is3inN
  },
  {
    value: '9.123',
    expectedResult: isNot3inN
  },
  {
    value: ' 009   ',
    expectedResult: is3inN
  },
  {
    value: ' 9   ',
    expectedResult: is3inN
  },
  {
    value: ' 036 ',
    expectedResult: isNot3inN
  },
  {
    value: ' 36 ',
    expectedResult: isNot3inN
  },
  {
    value: '  243',
    expectedResult: is3inN
  },
  {
    value: ' 123456 ',
    expectedResult: isNot3inN
  }],
  sumOfList: [{
    value: null,
    expectedResult: nullMessage
  },
  {
    value: '',
    expectedResult: errorMessage
  },
  {
    value: '        ',
    expectedResult: errorMessage
  },
  {
    value: '  9fd74gs63jn      ',
    expectedResult: errorMessage
  },
  {
    value: '    0     ',
    expectedResult: sumIs + 0
  },
  {
    value: '-27,,10',
    expectedResult: errorMessage
  },
  {
    value: '-9.123,10',
    expectedResult: sumIs + '0.877'
  },
  {
    value: '    1,   ,',
    expectedResult: errorMessage
  },
  {
    value: '9.123abc,10',
    expectedResult: errorMessage
  },
  {
    value: ' 009   ,1.2',
    expectedResult: sumIs + 10.2
  },
  {
    value: ' 9,   ,1',
    expectedResult: errorMessage
  },
  {
    value: ' 2, 3  ,5',
    expectedResult: sumIs + 10
  },
  {
    value: ' 9,   ',
    expectedResult: errorMessage
  }],
  pow: [{
    value: [null, null],
    expectedResult: nullMessage
  },
  {
    value: ['   ', null],
    expectedResult: errorMessage
  },
  {
    value: ['        ', '  '],
    expectedResult: errorMessage
  },
  {
    value: ['  9fd74gs63jn      ', null],
    expectedResult: errorMessage
  },
  {
    value: ['    0     ', '0'],
    expectedResult: xInNIs + 1
  },
  {
    value: ['    0     ', null],
    expectedResult: errorMessage
  },
  {
    value: ['-3', '      '],
    expectedResult: errorMessage
  },
  {
    value: ['-3', '2'],
    expectedResult: xInNIs + '9'
  },
  {
    value: ['   3.2  ', '  2 '],
    expectedResult: xInNIs + '10.24'
  },
  {
    value: ['   3.2  ', '  2.2 '],
    expectedResult: errorMessage
  },
  {
    value: [' 009   ', '   1   '],
    expectedResult: xInNIs + 9
  },
  {
    value: [' 91 ', '  0 '],
    expectedResult: xInNIs + 1
  },
  {
    value: [' 2 ', '-02 '],
    expectedResult: xInNIs + '0.25'
  },
  {
    value: [' 0   ', '5'],
    expectedResult: xInNIs + 0
  }]
}

const codeCheckPart = `
const result = []
const originalPrompt = window.prompt
const originalAlert = window.alert

for(let j = 0; j < inputs.length; j++) {
  result[j] = [inputs[j]]
  window.prompt = (function() {
    let asked = false
    let i = 0
    const total = inputs[j].value?.length || 1
    return () => {
      if (total <= i) {
        throw new Error('reask')
      }

      i++
      return Array.isArray(inputs[j].value) ? inputs[j].value[i-1] : inputs[j].value
    }
  })()
  window.alert = msg => result[j].push(msg.toString())

  try {
    (function() {
      /* code */
    })();
  }
  catch(err) {
    if (err.message === 'reask') {
      result[j].push('[error, the app re-asks user]')
    }
    else {
      result[j].push('[the app failed]')
    }
  }
}
window.prompt = originalPrompt
window.alert = originalAlert
const resultsEvent = new CustomEvent('results-ready', { detail: result });
window.dispatchEvent(resultsEvent)`

const generateCode = valuesToCheck => {
  return `const inputs = ${JSON.stringify(valuesToCheck)}; ${codeCheckPart}`
}

export default [{
  id: 'prime-num',
  title: 'Prime number',
  description: [
    'The user enters a number. Check if it is prime. ',
    'A prime number is a whole number, larger than 1 and not having dividers except 1 and itself.'
  ],
  code: generateCode(valuesToCheckMap.primeNum)
},
{
  id: 'degree-of-3',
  title: 'Degree of 3',
  description: [
    'The user enters a number. Check if the number can be obtained as 3 in some whole degree. ',
    'For example numbers 9, 81 can be obtained as they are 3^2 and 3^4, 13 cannot.'
  ],
  code: generateCode(valuesToCheckMap.degreeOf3)
},
{
  id: 'sum-of-list',
  title: 'Sum of number list',
  description: [
    'Create an array of numbers, the elements of which are specified by the user. Display the sum of these numbers.',
    'Base it on the lesson task where the user enters all elements in a single line.',
    '"Cancel" should terminate the program, and an empty string should not be treated as 0.'
  ],
  code: generateCode(valuesToCheckMap.sumOfList)
},
{
  id: 'pow',
  title: 'x^n recursively',
  description: [
    'Implement a recursive function that exponentiates a number:',
    '- the number to be raised to the power is passed as the first argument to the function;',
    '- The degree is passed as the second argument to the pow(num, degree) function.',
    'The number and the degree is entered by user',
    'For negative powers, it should calculate (x^n = 1/x^(-n) ), for non-integer powers, it should write an error'
  ],
  code: generateCode(valuesToCheckMap.pow)
}]

