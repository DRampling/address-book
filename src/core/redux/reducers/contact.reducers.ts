import { Reducer } from 'redux'

import { ContactState } from '../../models/ContactState'
import { ContactActionTypes } from '../types/contact.types'

const initialState: ContactState = {
  contacts: [],
  loaded: false,
  loading: false,
  notification: { open: false, action: '', message: '' }
}

const reducer: Reducer<ContactState> = (state: ContactState = initialState, action) => {
  switch (action.type) {
    case ContactActionTypes.LOAD_CONTACTS:
      return { ...state, loaded: false, loading: true }
    case ContactActionTypes.LOAD_CONTACTS_SUCCESS:
      return { ...state, loaded: true, loading: false, contacts: action.payload }
    case ContactActionTypes.LOAD_CONTACTS_FAIL:
      return { ...state, loaded: false, loading: false, notification: action.payload }
    default:
      return state
  }
}

export { reducer as contactReducer }
