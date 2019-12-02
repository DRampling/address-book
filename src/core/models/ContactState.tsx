import { Contact } from './Contact'

export class ContactState {
  contacts: Contact[]
  loading: boolean
  loaded: boolean

  constructor() {
    this.contacts = []
    this.loading = false
    this.loaded = false
  }
}
