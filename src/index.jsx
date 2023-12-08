import './styles.scss'

import React from 'react'
import ReactDom from 'react-dom/client'
import Home from './Home'

const rootEl = document.getElementById('root')
const root = ReactDom.createRoot(rootEl)

root.render(<Home />)