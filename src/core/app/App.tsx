import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { ContactPage } from '../../features/contacts/pages/ContactsPage'
import { ContactsPage } from '../../features/contacts/pages/ContactPage'
import { NavBar } from '../../shared/components/NavBar'

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/contacts/:contactID" component={ContactPage} />
        <Route path="/contacts" component={ContactsPage} />
        <Route path="/">
          <Redirect to="/contacts" />
        </Route>
      </Switch>
    </div>
  )
}

export default App
