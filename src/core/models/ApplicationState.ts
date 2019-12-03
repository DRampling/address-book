import { ContactState } from './ContactState'
import { RouterState } from 'connected-react-router'

export interface ApplicationState {
  contact: ContactState
  router: RouterState
}
