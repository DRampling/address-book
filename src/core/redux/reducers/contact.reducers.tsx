import { ContactState } from '../../models/ContactState'
import { ContactActions, ContactTypes } from '../types/contact.types'

export function contactReducer(state: ContactState = new ContactState(), action: ContactActions): ContactState {
  switch (action.type) {
    case ContactTypes.LOAD_CONTACTS:
      return { ...state, loaded: false, loading: true }
    case ContactTypes.LOAD_CONTACTS_SUCCESS:
      return { ...state, loaded: true, loading: false }
    case ContactTypes.LOAD_CONTACTS_FAIL:
      return { ...state, loaded: false, loading: false }
    default:
      return state
  }
}
