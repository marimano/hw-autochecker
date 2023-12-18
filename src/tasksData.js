const codeInitPart = `const result = []
const originalPrompt = window.prompt
const originalAlert = window.alert`

const codeSetupAndTryCatchPart = `result[j] = [inputs[j]]
window.prompt = (function() {
  let asked = false
  return () => {
    if (asked) {
      throw new Error('reask')
    }

    asked = true
    return inputs[j].value
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
}`

const codeRestoreAndSendPart = `window.prompt = originalPrompt
window.alert = originalAlert
const resultsEvent = new CustomEvent('results-ready', { detail: result });
window.dispatchEvent(resultsEvent)`

export default [{
  id: 'prime-num',
  title: 'Prime number',
  description: [
    'The user enters a number. Check if it is prime. ',
    'A prime number is a whole number, larger than 1 and not having dividers except 1 and itself.'
  ],
  code: `
    const errorMessage = 'Error message'
    const notPrime = 'number is not prime'
    const prime = 'number is prime'

    const inputs = [{
      value: null,
      expectedResult: 'Nothing or a message about canceling'
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
    }]
    ${codeInitPart}

    for(let j = 0; j < inputs.length; j++) {
      ${codeSetupAndTryCatchPart}
    }
    ${codeRestoreAndSendPart}
  `
},
{
  id: 'degree-of-3',
  title: 'Degree of 3',
  description: [
    'The user enters a number. Check if the number can be obtained as 3 in some whole degree. ',
    'For example numbers 9, 81 can be obtained as they are 3^2 and 3^4, 13 cannot.'
  ],
  code: `
    const errorMessage = 'Error message'
    const cannot = 'number is not 3^n'
    const can = 'number is 3^n'

    const inputs = [{
      value: null,
      expectedResult: 'Nothing or a message about canceling'
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
      expectedResult: cannot
    },
    {
      value: '-27',
      expectedResult: cannot
    },
    {
      value: '-9.123',
      expectedResult: cannot
    },
    {
      value: '    1   ',
      expectedResult: can
    },
    {
      value: '9.123',
      expectedResult: cannot
    },
    {
      value: ' 009   ',
      expectedResult: can
    },
    {
      value: ' 9   ',
      expectedResult: can
    },
    {
      value: ' 036 ',
      expectedResult: cannot
    },
    {
      value: ' 36 ',
      expectedResult: cannot
    },
    {
      value: '  243',
      expectedResult: can
    },
    {
      value: ' 123456 ',
      expectedResult: cannot
    }]
    ${codeInitPart}

    for(let j = 0; j < inputs.length; j++) {
      ${codeSetupAndTryCatchPart}
    }
    ${codeRestoreAndSendPart}
  `
},
{
  id: 'sum-of-list',
  title: 'Sum of number list',
  description: [
    'Create an array of numbers, the elements of which are specified by the user. Display the sum of these numbers.',
    'Base it on the lesson task where the user enters all elements in a single line.',
    '"Cancel" should terminate the program, and an empty string should not be treated as 0.'
  ],
  code: `
    const errorMessage = 'Error message'
    const sumIs = 'sum is '

    const inputs = [{
      value: null,
      expectedResult: 'Nothing or a message about canceling'
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
    }]
    ${codeInitPart}

    for(let j = 0; j < inputs.length; j++) {
      ${codeSetupAndTryCatchPart}
    }
    ${codeRestoreAndSendPart}
  `
}]

