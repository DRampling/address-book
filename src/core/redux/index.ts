import { createStore, applyMiddleware, Store, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { History } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { all, fork } from 'redux-saga/effects'

import { ApplicationState } from '../models/ApplicationState'
import { contactReducer } from './reducers/contact.reducers'
import contactEffects from './effects/contact.effects'

export const createRootReducer = (history: History) =>
  combineReducers({ contact: contactReducer, router: connectRouter(history) })

export function* rootSaga() {
  yield all([fork(contactEffects)])
}

export default function configureStore(history: History): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({})
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    createRootReducer(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  )
  sagaMiddleware.run(rootSaga)
  return store
}
