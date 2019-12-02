import { action } from 'typesafe-actions'

import { ContactActionTypes } from '../types/contact.types'

export const loadContacts = () => action(ContactActionTypes.LOAD_CONTACTS)
