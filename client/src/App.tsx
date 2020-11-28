import React, { Fragment } from 'react';
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import Route from "react-router-dom/es/Route";
import { BrowserRouter } from 'react-router-dom';


const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

const App = () => (
    <BrowserRouter>
      <CssBaseline />
      <AppHeader />
     <Route exact path="/" component={Home} />
    </BrowserRouter>
);

export default withStyles(styles)(App);