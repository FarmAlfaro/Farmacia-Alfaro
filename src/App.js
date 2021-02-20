import React, { Fragment, useEffect } from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import AOS from "aos";
import "aos/dist/aos.css";

import './App.css';

import Header from './components/Layout/Header';
import Salud from './components/Salud';
import TablaTurno from './components/TablaTurno';
import Services from './components/Services';


import Page from './components/Page';


function App() {
  useEffect(() => {

    AOS.init();

  }, []);

  return (

    <Fragment>
      <Router>
        <Switch>
          <Route path='/' exact component={Header} />
          <Route path='/Salud' exact component={Salud} />
          <Route path='/TablaTurno' exact component={TablaTurno} />
          <Route path='/Services' exact component={Services} />
        </Switch>
        <Page />
      </Router> 
    </Fragment>

  );
}

export default App;