import React, { useState } from 'react'

export default () => {
  const [value, setValue] = useState('')
  const toggle = () => setValue(value === 'yes' ? 'no' : value === 'no' ? 'maybe' : 'yes')
  return <td onClick={toggle} className='yes-no-cell'>
    <span className={'yes-no ' + value}></span>
  </td>
}