import React from 'react'

import { ContactState as PropsFromState, ContactState } from '../../../core/models/ContactState'
import { connect } from 'react-redux'
import { loadContacts } from '../../../core/redux/actions/contact.actions'

interface PropsFromDispatch {
  loadContacts: typeof loadContacts
}

type AllProps = PropsFromState & PropsFromDispatch

class ContactsPage extends React.Component<AllProps> {
  public componentDidMount() {
    const { loadContacts } = this.props
    loadContacts()
  }

  public render() {
    return <div>Contacts Page</div>
  }
}

const mapStateToProps = (state: ContactState) => ({
  contacts: state.contacts,
  loading: state.loading,
  loaded: state.loaded
})

const mapDispatchToProps = {
  loadContacts
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage)
