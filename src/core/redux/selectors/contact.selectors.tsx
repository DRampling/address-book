import { ContactState } from '../../models/ContactState'

export const selectAllContacts = (state: ContactState) => state.contacts
export const selectContactsLoading = (state: ContactState) => state.loading
export const selectContactsLoaded = (state: ContactState) => state.loaded
