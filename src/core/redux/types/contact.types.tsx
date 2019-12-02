import { Contact } from '../../models/Contact'

export enum ContactTypes {
  LOAD_CONTACTS = '[Contact] Load Contacts',
  LOAD_CONTACTS_SUCCESS = '[Contact] Loaded Contacts',
  LOAD_CONTACTS_FAIL = '[Contact] Failed to Load Contacts'
}

interface LoadContact {
  type: ContactTypes.LOAD_CONTACTS
}

interface LoadContactSuccess {
  type: ContactTypes.LOAD_CONTACTS_SUCCESS
  payload: { contacts: Contact[] }
}

interface LoadContactFail {
  type: ContactTypes.LOAD_CONTACTS_FAIL
  payload: { error: Error }
}

export type ContactActions = LoadContact | LoadContactSuccess | LoadContactFail
