import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './core/app/App'
import configureStore from './core/redux'
import './index.css'

const store = configureStore()

render(
  <Provider store={store}>
    <Router>
      <App></App>
    </Router>
  </Provider>,
  document.getElementById('app')
)
