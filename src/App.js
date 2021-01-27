import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/TopBar';
import Landing from './components/layout/Home';
import Routes from './components/routing/Routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';




import './App.css';


const App = () => {


  return (

      <Router>
        <Fragment>
          {/*<Navbar />*/}
          <Switch>
            <Route exact path='/' component={Landing} />
            <Routes />
          </Switch>
        </Fragment>
      </Router>

  );
};


export default App;
