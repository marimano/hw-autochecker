import React, { useState } from 'react'
import tasksData from './tasksData'
import ResultComponent from './components/ResultComponent'

export default () => {
  const [selectedTaskId, setSelectedTaskId] = useState()
  const [codeToTest, setCodeToTest] = useState('')
  const [isRun, setIsRun] = useState(false)

  const selectedTask = selectedTaskId && tasksData.find(t => t.id === selectedTaskId)
  const switchTask = id => {
    setSelectedTaskId(id)
    setCodeToTest('')
    setIsRun(false)
  }

  const onCodeToTestChange = e => {
    setCodeToTest(e.target.value);
    setIsRun(false)
  }

  return <div className='hw'>
    <div className='hw-list'>
      <h3>Choose a task to check</h3>
      {tasksData.map(({ id, title }) => {
        const className = 'hw-list-item' + (id === selectedTaskId ? ' active' : '')
        return <button key={id} className={className} onClick={() => switchTask(id)}>
          {title}
        </button>
      })}
    </div>
    {selectedTask && <div className='hw-details'>
      <h3>{selectedTask.title}</h3>
      <div>{selectedTask.description.map(d => <p key={d}>{d}</p>)}</div>
      <textarea value={codeToTest} onChange={onCodeToTestChange}/>
      <button disabled={!codeToTest.trim() || isRun} onClick={() => setIsRun(true)}>Run checker</button>
      <ResultComponent selectedTask={selectedTask} codeToTest={codeToTest} isRun={isRun}/>
    </div>}
  </div>
}