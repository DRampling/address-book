import { action } from 'typesafe-actions'

import { Contact } from '../../models/Contact'
import { Notification } from '../../models/Notification'
import { ContactActionTypes } from '../types/contact.types'

export const loadContacts = () => action(ContactActionTypes.LOAD_CONTACTS)
export const loadContactsSuccess = (contacts: Contact[]) => action(ContactActionTypes.LOAD_CONTACTS_SUCCESS, contacts)
export const loadContactsFail = (notification: Notification) =>
  action(ContactActionTypes.LOAD_CONTACTS_FAIL, notification)
