import React from 'react'
import { connect } from 'react-redux'
import { Button, Snackbar } from '@material-ui/core'

import { ContactState } from '../../../core/models/ContactState'
import { loadContacts } from '../../../core/redux/actions/contact.actions'
import { Contact } from '../../../core/models/Contact'
import { Notification } from '../../../core/models/Notification'
import { ApplicationState } from '../../../core/models/ApplicationState'

interface PropsFromState {
  contacts: Contact[]
  loading: boolean
  loaded: boolean
  notification: Notification
}

interface PropsFromDispatch {
  loadContacts: typeof loadContacts
}

type AllProps = PropsFromState & PropsFromDispatch

class ContactsPage extends React.Component<AllProps> {
  public componentDidMount() {
    const { loadContacts } = this.props
    loadContacts()
  }

  public handleRetry() {
    console.log('retry api')
  }

  private showNotifications() {
    const { notification } = this.props
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={notification.open}
          autoHideDuration={6000}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">{notification.message}</span>}
          action={[
            <Button key="retry" color="secondary" size="small" onClick={this.handleRetry}>
              RETRY
            </Button>
          ]}
        />
      </div>
    )
  }

  public render() {
    return <div>{this.showNotifications()}</div>
  }
}

const mapStateToProps = ({ contact }: ApplicationState) => ({
  contacts: contact.contacts,
  loading: contact.loading,
  loaded: contact.loaded,
  notification: contact.notification
})

const mapDispatchToProps = {
  loadContacts
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage)
