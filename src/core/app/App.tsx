import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Store } from 'redux'
import { History } from 'history'

import Routes from '../routes'
import { ApplicationState } from '../models/ApplicationState'

export interface ApplicationProps {
  store: Store<ApplicationState>
  history: History
}

const App: React.FC<ApplicationProps> = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  )
}

export default App
