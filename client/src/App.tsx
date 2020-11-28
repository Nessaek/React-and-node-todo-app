import {CssBaseline, withStyles,} from '@material-ui/core'
import * as React from 'react'

import AppHeader from './components/AppHeader'
import Home from './pages/Home'
import {BrowserRouter, Route} from 'react-router-dom'
import {ConfirmProvider} from "material-ui-confirm"

const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
})

const App = () => (
    <ConfirmProvider>
      <BrowserRouter>
        <CssBaseline/>
        <AppHeader/>
        <Route exact path="/" component={Home}/>
      </BrowserRouter>
    </ConfirmProvider>
)

export default withStyles(styles)(App)