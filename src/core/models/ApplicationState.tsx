import { ContactState } from './ContactState'
import { RouterState } from 'connected-react-router'

export interface ApplicationState {
  contacts: ContactState
  router: RouterState
}
