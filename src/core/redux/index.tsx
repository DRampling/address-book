import { createStore, applyMiddleware, Store, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { History } from 'history'

import { ApplicationState } from '../models/ApplicationState'
import { contactReducer } from './reducers/contact.reducers'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { all, fork } from 'redux-saga/effects'
import contactEffects from './effects/contact.effects'

export const createRootReducer = (history: History) =>
  combineReducers({ contacts: contactReducer, router: connectRouter(history) })

export function* rootSaga() {
  yield all([fork(contactEffects)])
}

export default function configureStore(history: History): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({})
  const effects = createSagaMiddleware()
  const store = createStore(
    createRootReducer(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history), effects))
  )
  effects.run(rootSaga)
  return store
}
