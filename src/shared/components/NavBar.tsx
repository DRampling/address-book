import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import { Button } from '@material-ui/core'

import { navBarStyles } from '../../core/services/styles.service'

export const NavBar: React.FC = () => {
  const classes = navBarStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button className={classes.home} href="/contacts" color="inherit">
            <Typography variant="h6" noWrap>
              Address Book
            </Typography>
          </Button>
          <div className={classes.root} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
