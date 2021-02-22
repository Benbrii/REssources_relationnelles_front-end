import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
// history
import { createBrowserHistory } from "history";

// router
import { Router, Route } from "react-router-dom";

// containers
import Home from "./containers/Home";
import Profil from "./containers/Profil";
import ConnexionPage from "./containers/connexionPage";
import RegisterPage from "./containers/RegisterPage";

axios.defaults.withCredentials = true;

export const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <>
          

              <Router history={history}>
                <Route exact path="/" component={ConnexionPage} />
                <Route exact path="/profil" component={Profil} />
                <Route exact path="/home"  component={Home}/>
                <Route exact path="/RegisterPage" component={RegisterPage} />
              </Router>
           
      </>
    );
  }
}


export default (App);
