import { Contact } from '../../models/Contact'
import { ContactTypes } from '../types/contact.types'
import { Error } from '../../models/Error'

export function loadContacts() {
  return { type: ContactTypes.LOAD_CONTACTS }
}

export function loadContactsSuccess(contacts: Contact[]) {
  return { type: ContactTypes.LOAD_CONTACTS_SUCCESS, payload: { contacts } }
}

export function loadContactsFail(error: Error) {
  return { type: ContactTypes.LOAD_CONTACTS_FAIL, payload: { error } }
}
