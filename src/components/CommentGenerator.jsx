import React, { useState } from 'react'
import './commentGenerator.styles.scss'
import { getNotReassignedLets, hasNonStrictEquality } from '../regExpCodeChecker'

const criteriaList = [{
  id: 'repo',
  caption: 'ДЗ в окремому репозиторії',
  displayCaption: 'A separate repository',
  penalty: 30,
},
{
  id: 'requirements',
  caption: 'Всі умови задачі виконані (програма робить те, що треба)',
  displayCaption: 'All the specified requirements are met',
  penalty: 10
},
{
  id: 'console-errors',
  caption: 'Немає помилок у консолі',
  displayCaption: 'No console errors',
  penalty: 10
},
{
  id: 'validation',
  caption: 'Зроблена валідація і враховані всі варіанти вхідних даних',
  displayCaption: 'There is a full validation',
  penalty: 10
},
{
  id: 'non-strict-equations',
  caption: 'Використовуються тільки строгі рівності',
  displayCaption: 'Only strict equality is used',
  penalty: 5
},
{
  id: 'const',
  caption: 'Використовуються const скрізь, де треба',
  displayCaption: 'const`s are used everywhere it is needed. lets without reasignment: ',
  hasInputNumField: true,
  penalty: 2
}]

const fallbackCopyTextToClipboard = text => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const isSuccessful = document.execCommand('copy');
    const msg = isSuccessful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  }
  catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

const copyTextToClipboard = text => {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }

  navigator.clipboard.writeText(text)
    .then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
}

export default () => {
  const [isReset, setIsReset] = useState(true)
  const [jsCodeToValidate, setJsCodeToValidate] = useState('')
  const [resultsText, setResultsText] = useState('')
  const criteriaWithState = criteriaList.map(criteria => {
    return {
      ...criteria,
      checkedState: useState(true),
      commentState: useState(''),
      numState: criteria.hasInputNumField && useState(0)
    }
  })

  const autoValidate = () => {
    if (isReset) {
      criteriaWithState.forEach(({ checkedState, commentState }) => {
        const [ , setIsChecked ] = checkedState
        setIsChecked(true)
        const [ , setComment ] = commentState
        setComment('')
      })

      setResultsText('')
    }

    const {
      checkedState: [ , setIsStrict ]
    } = criteriaWithState.find(({ id }) => id === 'non-strict-equations')
    setIsStrict(!hasNonStrictEquality(jsCodeToValidate))

    const notReassignedLets = getNotReassignedLets(jsCodeToValidate)

    const {
      checkedState: [ , setIsConstChecked ],
      commentState: [ , setConstComment ],
      numState: [ , setLetNumber ]
    } = criteriaWithState.find(({ id }) => id === 'const')
    setLetNumber(notReassignedLets.length)
    setConstComment(notReassignedLets.join(', '))
    setIsConstChecked(!notReassignedLets.length)
  }

  const generate = () => {
    let message = ''

    criteriaWithState.forEach(({
      checkedState: [ isOk ],
      commentState: [ comment ],
      caption
    }) => {
      message += `- ${caption}: ${isOk ? 'Так' : 'Ні'}\n`
      if (comment) {
        message += comment + '\n'
      }
    })
  
    setResultsText(message)
    copyTextToClipboard(message)
  }

  return <div className='comment-generator'>
    <div className="source">
      <h3>HW code:</h3>
      <textarea
        className="hw-js-text"
        placeholder="JS"
        value={jsCodeToValidate}
        onChange={e => setJsCodeToValidate(e.target.value)}
      />
      <div>
        <button type="button" onClick={autoValidate}>Run syntax check</button>
        <input
          type='checkbox'
          id="reset-input"
          checked={isReset}
          onChange={e => setIsReset(e.target.checked)}
        />
        <label htmlFor="reset-input">Clear all</label>
      </div>
    </div>

    <div className="results">
      <h3>Results:</h3>
      {criteriaWithState.map(({ id, displayCaption, checkedState, commentState, numState }) => {
        const [ isChecked, setIsChecked ] = checkedState
        const [ comment, setComment ] = commentState
        return <div key={id} className={'criteria ' + id}>
          <div className="criteria-row">
            <input
              type="checkbox"
              id={id + '-input'}
              checked={isChecked}
              onChange={e => setIsChecked(e.target.checked)}
            />
            <label htmlFor={id + '-input'}>{displayCaption}</label>
            {numState && <input
              type="number"
              min="0"
              max="100"
              step="1"
              value={numState[0]}
              onChange={e => numState[1](e.target.value)}
            />}
          </div>
          <textarea placeholder="Comment" value={comment} onChange={e => setComment(e.target.value)} />
        </div>
      })}
      <div>
        <button type="button" onClick={generate}>Generate a general comment in UA</button>
        <div className="results-text">{resultsText}</div>
      </div>
    </div>
  </div>
}