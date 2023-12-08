import React, { useEffect, useRef, useState } from 'react'
import YesNoCell from './YesNoCell'

export default ({ selectedTask, codeToTest, isRun }) => {
  const [errorMsg, setErrorMsg] = useState()
  const [resultsData, setResultsData] = useState()
  useEffect(() => {
    const onResultsReady = event => {
      setResultsData(event.detail)
    };

    window.addEventListener('results-ready', onResultsReady);
    return () => window.removeEventListener('results-ready', onResultsReady);
  }, [])

  const resultRef = useRef()
  useEffect(() => {
    setErrorMsg(null)
    if (!isRun) {
      setResultsData(null)
      return
    }
    
    const scriptEl = document.createElement('script')
    scriptEl.innerHTML = '(function(){' + selectedTask.code.replace('/* code */', codeToTest) + '})()'
    const catchBadCode = event =>{
      event.preventDefault();
      setErrorMsg('Bad code, fix it and try again')
      scriptEl.innerHTML = ''
      window.removeEventListener('error', catchBadCode);
    };

    window.addEventListener('error', catchBadCode);

    resultRef.current.append(scriptEl)
    return () => {
      window.removeEventListener('error', catchBadCode);
      scriptEl.remove()
    }
  }, [isRun])

  return <div className='hw-results' ref={resultRef}>
    {errorMsg && <span className='hw-results-error'>{errorMsg}</span>}
    {resultsData && <table className='hw-results-table'>
      <thead>
        <tr>
          <th>Value to check</th>
          <th>Expected result</th>
          <th>Actual result</th>
          <th>Is correct</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map(([{ value, expectedResult }, ...actualResults]) => {
          return <tr key={value}>
            <td><pre>{JSON.stringify(value)}</pre></td>
            <td>{expectedResult}</td>
            <td>{actualResults.length ? actualResults.map(res => <p key={res}>{res}</p>) : '[nothing shown in alert]'}</td>
            <YesNoCell/>
          </tr>
        })}
      </tbody>
    </table>}
  </div>
}