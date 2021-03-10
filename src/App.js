import React, { Component } from 'react';
import axios from "axios";
// import { connect } from 'react-redux';
// history
import { createBrowserHistory } from "history";

// router
import { Router, Route } from "react-router-dom";

// containers
import Home from "./containers/Home";
import Profil from "./containers/Profil";
import ConnexionPage from "./containers/connexionPage";
import RessourceList from "./containers/RessourceList";
import AdminPage from "./containers/AdminPage"

import { connect } from 'react-redux';

axios.defaults.withCredentials = true;

export const history = createBrowserHistory();

class App extends Component {


  
  render() {
    return (
      <>
        <Router history={history}>
          <Route exact path="/connexion" component={ConnexionPage} />
          <Route exact path="/" component={Home} />
          <Route exact path="/ressource/:id" component={RessourceList} />
          <Route exact path="/profil" component={Profil} />
          <Route exact path="/adminPage" component={AdminPage} />
        </Router>

      </>
    );
  }
}

function mapStateToProps(state) {

    return {
    };
}


function mapDispatchToProps(dispatch) {

    return {
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

