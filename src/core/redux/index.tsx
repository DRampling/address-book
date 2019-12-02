import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './reducers'

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const middleware = [thunkMiddleware]
  const middleWareEnhancer = applyMiddleware(...middleware)
  return createStore(rootReducer, composeWithDevTools(middleWareEnhancer))
}
