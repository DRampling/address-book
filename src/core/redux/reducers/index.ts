import { combineReducers } from 'redux'

import { contactReducer } from './contact.reducers'

export const rootReducer = combineReducers({
  contact: contactReducer
})
