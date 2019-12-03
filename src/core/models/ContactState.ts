import { Contact } from './Contact'
import { Notification } from './Notification'

export interface ContactState {
  readonly contacts: Contact[]
  readonly loading: boolean
  readonly loaded: boolean
  readonly notification: Notification
}
