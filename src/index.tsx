import React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory } from 'history'

import App from './core/app/App'
import configureStore from './core/redux'
import './index.css'

interface Window {
  INITIAL_REDUX_STATE: any
}

const history = createBrowserHistory()
const store = configureStore(history)

render(<App store={store} history={history} />, document.getElementById('app'))
