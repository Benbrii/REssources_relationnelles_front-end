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

import { authControl } from "./actions/connexion.action"
import { connect } from 'react-redux';
import { clearMessage } from "./actions/message.action"

axios.defaults.withCredentials = true;

export const history = createBrowserHistory();

class App extends Component {

  componentDidMount() {
    this.props.authControl().then(() => { this.props.clearMessage() })
  }

  render() {
    return (
      <>
        <Router history={history}>
          <Route exact path="/connexion" component={ConnexionPage} />
          <Route exact path="/" component={Home} />
          <Route exact path="/ressource/:id" component={RessourceList} />

          {/*PrivatePage*/}
          <Route component={Profil} path="/profil" exact />
          <Route component={AdminPage} path="/adminPage" exact />
        </Router>

      </>
    );
  }
}

function mapStateToProps(state) {

  return {
    isLogged: state.connectReducer.isLogged
  };
}

function mapDispatchToProps(dispatch) {

  return {
    authControl: () => dispatch(authControl()),
    clearMessage: () => dispatch(clearMessage())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

