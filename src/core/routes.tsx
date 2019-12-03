import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { NavBar } from '../shared/components/NavBar'
import ContactsIndex from '../features/contacts/pages/ContactsIndex'

const Routes: React.SFC = () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/contacts" component={ContactsIndex} />
      <Route path="/">
        <Redirect to="/contacts" />
      </Route>
    </Switch>
  </div>
)

export default Routes
