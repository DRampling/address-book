import React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'

import { ApplicationState } from '../../../core/models/ApplicationState'
import ContactsPage from './ContactsPage'
import { ContactPage } from './ContactPage'
import { Contact } from '../../../core/models/Contact'
import { Notification } from '../../../core/models/Notification'

interface PropsFromState {
  contacts: Contact[]
  loading: boolean
  loaded: boolean
  notification: Notification
}

type AllProps = PropsFromState & RouteComponentProps

const ContactsIndex: React.FC<AllProps> = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.path}/`} component={ContactsPage} />
      <Route path={`${match.path}/:contactID`} component={ContactPage} />
    </Switch>
  )
}

const mapStateToProps = ({ contact }: ApplicationState) => ({
  contacts: contact.contacts,
  loading: contact.loaded,
  loaded: contact.loaded,
  notification: contact.notification
})

export default connect(mapStateToProps)(ContactsIndex)
