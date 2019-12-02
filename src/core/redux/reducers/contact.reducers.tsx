import { ContactState } from '../../models/ContactState'
import { Reducer } from 'redux'
import { ContactActionTypes } from '../types/contact.types'

const initialState = new ContactState()

const reducer: Reducer<ContactState> = (state: ContactState = initialState, action) => {
  switch (action.type) {
    case ContactActionTypes.LOAD_CONTACTS:
      return { ...state, loaded: false, loading: true }
    case ContactActionTypes.LOAD_CONTACTS_SUCCESS:
      return { ...state, loaded: true, loading: false }
    case ContactActionTypes.LOAD_CONTACTS_FAIL:
      return { ...state, loaded: false, loading: false }
    default:
      return state
  }
}

export { reducer as contactReducer }
