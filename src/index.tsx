import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'

import App from './core/app/App'
import configureStore from './core/redux'
import './index.css'

interface Window {
  INITIAL_REDUX_STATE: any
}

const history = createBrowserHistory()
const store = configureStore(history)

render(
  <Provider store={store}>
    <Router>
      <App></App>
    </Router>
  </Provider>,
  document.getElementById('app')
)
